"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"
import { userSchema } from "@/lib/validation"
import { createUser } from "@/actions/user.action"

function CreateUserForm({setOpen}: {setOpen: (open: boolean) => void}) {

    const [isLoading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof userSchema>>({
        resolver: zodResolver(userSchema),
        defaultValues: {
            name: "",
            surname: "",
            age: "",
            payment: "",
            status: ""
        }
    })

    async function onSubmit(values: z.infer<typeof userSchema>){
        const {age, payment} = values
        const promise = createUser({...values, age: +age, payment: +payment})
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
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                User name<span className='text-red-500'> *</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    disabled = {isLoading}
                                    placeholder="Islombek..." 
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
                    name="surname"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                User surname<span className='text-red-500'> *</span>
                            </FormLabel>
                            <FormControl>
                                <Input
                                    disabled = {isLoading}
                                    className="bg-secondary"
                                    placeholder="Abdurazzoqov..."
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Age<span className='text-red-500'> *</span>
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
                    name="payment"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Payment<span className='text-red-500'> *</span>
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
                    name="status"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Level
                                <span className='text-red-500'> *</span>
                            </FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                >
                                    <SelectTrigger className="w-full bg-secondary">
                                        <SelectValue placeholder={'Select'} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value={"Succesfully"}>
                                            Succesfully
                                        </SelectItem>
                                        <SelectItem value={"Loading"}>
                                            Loading
                                        </SelectItem>
                                        <SelectItem value={"Error"}>
                                            Error
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
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
                        Clear
                    </Button>
                    <Button 
                        type="submit"
                        size={"lg"}
                        disabled={isLoading}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
        </>
    )
}

export default CreateUserForm