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
    price: string
    rating: number
    data: string
}