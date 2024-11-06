export interface TypeToDo {
    id: number,
    title: string,
    text: string,
    date: Date
}


export interface IUser {
    email: string,
    username: string,
    password: string,
    name: {
        firstname: string,
        lastname: string
    },
    address: {
        city: string,
        street:  string,
        number: number,
        zipcode:  string,
        geolocation: {
            lat:  string,
            long:  string
        }
    },
    phone:  string

}


export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}