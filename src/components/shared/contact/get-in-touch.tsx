"use client"

import React, {useState} from 'react';
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {useMediaQuery} from "@react-hook/media-query";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {toast} from "sonner";

interface IFormData {
    email: string;
    name: string;
    message: string;
}

function GetInTouch() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery('only screen and (min-width: 768px)')

    const toggleOpen = () => setOpen(value => !value)

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button variant="default" className={`shadow-sm`}>Get in touch</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Get in touch</DialogTitle>
                        <DialogDescription>
                            You have an idea, leave a message ?
                        </DialogDescription>
                    </DialogHeader>
                    <ProfileForm toggleOpen={toggleOpen}/>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="default" className={`shadow-sm`}>Get in touch</Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Get in touch</DrawerTitle>
                    <DrawerDescription>
                        You have an idea, leave a message ?
                    </DrawerDescription>
                </DrawerHeader>
                <ProfileForm className="px-4" toggleOpen={toggleOpen}/>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function ProfileForm({className, toggleOpen}: React.ComponentProps<"form"> & {
    toggleOpen: () => void
}) {
    const [formData, setFormData] = useState<IFormData>({} as IFormData);
    const [isLoading, setIsLoading] = useState(false)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(value => ({
            ...value,
            [e.target.id]: e.target.value
        }))
    }
    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true)
            const res = await fetch("/api/send-message", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            const data = await res.json();

            setIsLoading(false)

            if (res.ok) {
                toggleOpen()
                toast.success("Message sent")

            } else {
                toast.error("Message not sent")
            }

        } catch (e) {
            setIsLoading(false)
            console.error(e)
            toast.error("Message not sent")
        }

    }
    return (
        <form className={cn("grid items-start gap-4", className)} onSubmit={handleSendMessage}>
            <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input type="name" id="name" onChange={handleInputChange} required/>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" onChange={handleInputChange} placeholder="example@example.com" required/>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    maxLength={500}
                    minLength={5}
                    onChange={handleInputChange}
                    placeholder="Type your message here."
                    required
                />
            </div>

            <Button type="submit" disabled={isLoading}>{isLoading ? "Sending ..." : "Send Message"}</Button>
        </form>
    )
}

export default GetInTouch;