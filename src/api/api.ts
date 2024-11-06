import {IUser} from "../types/Types.ts";


interface Tokens {
    error: string;
    token?: string;
}

class Api {
    token: string | undefined = localStorage.getItem('token') || undefined

    async register(body: IUser) {
        const data = await fetch('https://fakestoreapi.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body),
        })
        if (!data.ok) {
            throw new Error('Ошибка запроса: ' + data.status);
        }

        return data

    }

    async login(body: { username: string, password: string }) {
        // Отправка запроса на сервер
        const response = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body) // Тело запроса в формате JSON
        });
        const data = await response.json(); // Парсинг ответа

        // Проверка на успешность ответа с сервера

        this.setTokens(data); // Установка токенов, если запрос успешен

        return data; // Возвращаем данные для дальнейшего использования

    }

    async delete(id: number) {
        const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
            method: "DELETE",
        })
        if (!response.ok) {
            throw new Error(`Failed to delete user. Status: ${response.status}`);
        }
        localStorage.removeItem('token')


        return {
            message: "User deleted successfully", status: response.status
        };
    }


    async singleUser(id: string) {
        return await fetch(`https://fakestoreapi.com/users/${id}`)
    }


    private setTokens(tokens: Tokens) {
        this.token = tokens.token;

        if (tokens.token) {
            localStorage.setItem('token', tokens.token);
        } else {
            localStorage.removeItem('token');
        }
    }

}

export const api = new Api()