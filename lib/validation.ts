import { z } from "zod"

export const productScheme = z.object({
    imageUrl: z.string().min(1),
    productName: z.string().min(1),
    price: z.string().min(1),
    rating: z.string().min(1),
    data: z.string().min(1)
})

export const userSchema = z.object({
    name: z.string().min(1),
    surname: z.string().min(1),
    age: z.string().min(1),
    payment: z.string().min(1),
    status: z.string().min(1)
})