"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { productScheme } from "@/lib/validation"
import { createProduct } from "@/actions/product.action"

function CreateProductForm({setOpen}: {setOpen: (open: boolean) => void}) {

    const [isLoading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof productScheme>>({
        resolver: zodResolver(productScheme),
        defaultValues: {
            imageUrl: "",
            productName: "",
            price: "",
            rating: "",
            data: "",
        }
    })

    async function onSubmit(values: z.infer<typeof productScheme>){
        const {price, rating} = values
        const promise = createProduct({...values, price: +price, rating: +rating})
            .then(() => {
                form.reset()
            })
            .finally(() => {
                setLoading(false)
                setOpen(false)
            })

        toast.promise(promise, {
            loading: "Loading...",
            success: "Successfully",
            error: "Error"
        }) 
    }

    return (
        <>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                
                <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                            URL-адрес изображения продукта<span className='text-red-500'> *</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    disabled = {isLoading}
                                    placeholder="https://image.png..." 
                                    {...field} 
                                    className="bg-secondary"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="productName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                            Название продукта<span className='text-red-500'> *</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    disabled = {isLoading}
                                    className="bg-secondary"
                                    placeholder="iPhone..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                            Цена<span className='text-red-500'> *</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    disabled = {isLoading}
                                    {...field} 
                                    className="bg-secondary"
                                    type="number"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                
                <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                            Рейтинг<span className='text-red-500'> *</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    disabled = {isLoading}
                                    {...field} 
                                    className="bg-secondary"
                                    type="number"
                                    max={5}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                    
                <FormField
                    control={form.control}
                    name="data"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                            Дата
                                <span className='text-red-500'> *</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    disabled = {isLoading}
                                    {...field} 
                                    className="bg-secondary"
                                    type="string"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                    
                <div className="flex justify-end gap-4">
                    <Button 
                        type="button"
                        size={"lg"}
                        variant={"destructive"}
                        disabled={isLoading}
                        onClick={() => form.reset()}
                    >
                        стереть
                    </Button>
                    <Button 
                        type="submit"
                        size={"lg"}
                        disabled={isLoading}
                    >
                        отправить
                    </Button>
                </div>
            </form>
        </Form>
        </>
    )
}

export default CreateProductForm
