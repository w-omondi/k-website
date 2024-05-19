"use client"
import React, {useState} from 'react';
import {toast} from "sonner";
import {cn} from "@/lib/utils";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {IFormData} from "@/components/shared/contact/get-in-touch";

function MessageForm({className, toggleOpen}: React.ComponentProps<"form"> & {
    toggleOpen?: () => void
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

            setIsLoading(false)

            if (res.ok) {
                toggleOpen && toggleOpen();
                setFormData({message: "", name: "", email: ""})
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
                <Input type="text" id="name" onChange={handleInputChange} value={formData?.name} placeholder={"Full name"} autoFocus required/>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" onChange={handleInputChange} value={formData?.email} placeholder={"example@example.com"} required/>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    maxLength={500}
                    minLength={5}
                    onChange={handleInputChange}
                    value={formData?.message}
                    placeholder="Type your message here."
                    required
                />
            </div>

            <Button type="submit" disabled={isLoading}>{isLoading ? "Sending ..." : "Send Message"}</Button>
        </form>
    )
}

export default MessageForm;