"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import { useState } from "react"
import CreateProductForm from "./add-product.form"

function AddProductDialog() {

    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Добавить продукт</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Добавить новый продукт</DialogTitle>
                </DialogHeader>
                <CreateProductForm setOpen = {setOpen}/>
            </DialogContent>
        </Dialog>
    )
}

export default AddProductDialog