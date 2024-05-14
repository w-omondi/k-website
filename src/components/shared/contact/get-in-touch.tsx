"use client"

import React from 'react';
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

function GetInTouch() {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery('only screen and (min-width: 768px)')

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
                    <ProfileForm/>
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
                <ProfileForm className="px-4"/>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

function ProfileForm({className}: React.ComponentProps<"form">) {
    return (
        <form className={cn("grid items-start gap-4", className)}>
            <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="example@example.com"/>
            </div>
            <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here." />
            </div>
            <Button type="submit">Send Message</Button>
        </form>
    )
}

export default GetInTouch;