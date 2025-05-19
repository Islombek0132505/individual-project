"use server"

import { connectToDatabase } from "@/lib/mongoose"
import { ICreateProduct } from "./types"
import Product from "@/database/product.model"
import { IProduct } from "@/app.types"

export const createProduct = async (data: ICreateProduct) => {
    try {
        await connectToDatabase()
        await Product.create(data)
        return true
    } catch (error) {
        throw new Error("Soething went wrong while creating products!")
    }
}

export const getProduct = async () => {
    try {
        await connectToDatabase()
        const products = await Product.find()
        console.log(products)
        return products as IProduct[]
    } catch (error) {
        throw new Error("Soething went wrong while getting products!")
    }
}