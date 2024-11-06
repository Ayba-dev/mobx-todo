import {makeAutoObservable} from "mobx";
import {TypeToDo} from "../types/Types.ts";


class Store {

    todo: TypeToDo[] = [] // Todo



    constructor() {
        makeAutoObservable(this)
    }

    addToDo = (title: string, text: string, date?) => {
        const newTodo = {
            id: Date.now(),
            title: title,
            text: text,
            date: date
        }
        if (!title || !text) {
            return
        }
        this.todo.push(newTodo)
        alert(`Добавили элемент ${title}`)
    }

    delete = (id) => {
        this.todo =  this.todo.filter((item) => item.id !== id)
    }

    update = ( id,title, text) => {
        const todo = this.todo.find((item) => item.id === id)
        if (todo){
            todo.title = title
            todo.text = text
        }
    }

}


export const store = new Store()