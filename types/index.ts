import { ReactNode } from "react";

export interface ChildProps {
    children: ReactNode
}

export interface IUser {
    name: string
    surname: string
    age: number
    payment: number
    status: string
}

export interface IProduct {
    imageUrl: string
    productName: string
    price: number
    rating: number
    data: string
}