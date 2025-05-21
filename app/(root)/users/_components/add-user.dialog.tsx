"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import { DialogTitle } from "@radix-ui/react-dialog"
import CreateUserForm from "./add-user.form"
import { useState } from "react"

function AddUserDialog() {

    const [open, setOpen] = useState(false)

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="outline">Добавить пользователя</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Добавить пользователя</DialogTitle>
                </DialogHeader>
                <CreateUserForm setOpen = {setOpen}/>
            </DialogContent>
        </Dialog>
    )
}

export default AddUserDialog