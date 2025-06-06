
export interface IProduct {
    _id: string
    imageUrl: string
    productName: string
    price: number
    rating: number
    data: string
}

export interface IUser {
    _id: string
    name: string
    surname: string
    payment: number
    age: number
    status: string
}