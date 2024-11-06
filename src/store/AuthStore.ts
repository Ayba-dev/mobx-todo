import {makeAutoObservable, runInAction} from "mobx";
import {api} from "../api/api.ts";
import {IUser} from "../types/Types.ts";


class authStore {
    error: undefined | string = ''
    authenticated: boolean = false
    isLoading: boolean = false
    userDeleted: boolean = false
    userSingle: IUser | null  = null

    constructor() {
        makeAutoObservable(this)
    }


    setError = (newError) => {
        this.error = newError; // This is tracked as an action
    };
    setAuthenticated = (bool) => {
        this.authenticated = bool; // This is tracked as an action
    };
    setUserDeleted = (bool) => {
        this.userDeleted = bool; // This is tracked as an action
    };

    setIsLoading = (bool) => {
        this.isLoading = bool
    }


    async register(body) {
        this.error = '';
        this.isLoading = true;
        try {
            await api.register(body)
            this.authenticated = true
        } catch (err) {
            this.error = err?.message
        } finally {
            this.isLoading = false
        }
    }


    async login(body) {
        this.error = ''
        this.isLoading = true

        try {
            const res = await api.login(body);

            if (!res.ok) {
                this.setAuthenticated(false)
                this.setError('Login failed');
            }
            this.setAuthenticated(true)
        } catch (err) {
            this.setAuthenticated(false);
            this.setError(err.message);
        } finally {
            this.setIsLoading(false);
        }
    }

    async deleteUser(id: number) {
        this.isLoading = true
        this.userDeleted = false
        this.error = ''
        try {
            const res = await api.delete(id)


            runInAction(() => {
                this.setUserDeleted(true)
                this.setAuthenticated(false)
            })

            return res

        } catch (err) {
            runInAction(() => {
                this.setError(err.message)
            })
        } finally {
            this.setIsLoading(false)
        }
    }


    async getUser(id: string) {
        try {
            const res = await api.singleUser(id)
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`)
            }

            this.userSingle = await res.json()


        } catch (error) {
            this.setError(error.message)

            return null
        }


    }


}

export const userStore = new authStore()