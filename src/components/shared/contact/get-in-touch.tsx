"use client"

import React from 'react';
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
import MessageForm from "@/components/shared/contact/message-form";

export interface IFormData {
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
                <DialogContent className="sm:max-w-[425px] bg-white">
                    <DialogHeader>
                        <DialogTitle>Get in touch</DialogTitle>
                        <DialogDescription>
                            Reach out to us with your inquiries, project ideas, or feedback.
                        </DialogDescription>
                    </DialogHeader>
                    <MessageForm toggleOpen={toggleOpen}/>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <Button variant="default" className={`shadow-sm text-lg`}>Get in touch</Button>
            </DrawerTrigger>
            <DrawerContent className={"bg-white"}>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Get in touch</DrawerTitle>
                    <DrawerDescription>
                        Reach out to us with your inquiries, project ideas, or feedback.
                    </DrawerDescription>
                </DrawerHeader>
                <MessageForm className="px-4" toggleOpen={toggleOpen}/>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}


export default GetInTouch;