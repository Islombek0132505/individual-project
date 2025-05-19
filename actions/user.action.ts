"use server"

import { connectToDatabase } from "@/lib/mongoose"
import { ICreateUser } from "./types"
import User from "@/database/user.model"
import { IUser } from "@/app.types"

export const createUser = async (data: ICreateUser) => {
    try {
        await connectToDatabase()
        await User.create(data)
        return true
    } catch (error) {
        throw new Error("Soething went wrong while creating user!")
    }
}

export const getUsers = async () => {
    try {
        await connectToDatabase()
        const courses = await User.find()
        console.log(courses)
        return courses as IUser[]
    } catch (error) {
        throw new Error("Soething went wrong while getting users!")
    }
}