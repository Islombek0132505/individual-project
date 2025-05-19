import { z } from "zod"

export const productScheme = z.object({
    imageUrl: z.string(),
    productName: z.string(),
    price: z.number(),
    rating: z.number(),
    data: z.string()
})

export const userSchema = z.object({
    name: z.string(),
    surname: z.string(),
    age: z.string(),
    payment: z.string(),
    status: z.string()
})