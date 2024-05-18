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
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Get in touch</DialogTitle>
                        <DialogDescription>
                            Reach out to us with your inquiries, project ideas, or feedback. Whether you are looking for
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            a consultation, need support with a current project, or have a general question, we're here
                            to help. Please fill out the form below, and our team will get back to you as soon as
                            possible
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
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Get in touch</DrawerTitle>
                    <DrawerDescription>
                        Reach out to us with your inquiries, project ideas, or feedback. Whether you are looking for a
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        consultation, need support with a current project, or have a general question, we're here to
                        help. Please fill out the form below, and our team will get back to you as soon as possible
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