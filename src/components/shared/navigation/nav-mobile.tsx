"use client"

import React, {useState} from 'react';
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {MdOutlineMenu} from "react-icons/md";
import Link from "next/link";
import {links} from "@/components/shared/navigation/navigation";
import {Separator} from "@/components/ui/separator";

function NavMobile() {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen(open => !open)
    const onOpenChange = (open: boolean) => setOpen(open)

    return (
        <Sheet open={open} onOpenChange={toggleOpen}>
            <SheetTrigger asChild><MdOutlineMenu className={`h-8 w-8`}/></SheetTrigger>
            <SheetContent className={"space-y-4"}>

                <SheetHeader>
                    <SheetTitle className={`text-start text-3xl font-semibold`}>Klinfuture</SheetTitle>
                </SheetHeader>

                <Separator/>

                <div className={`flex flex-col gap-4`}>
                    {links.map(link => (
                        <Link
                            key={link.value}
                            href={link.value}
                            className={`text-start text-xlg font-semibold`}
                            onClick={toggleOpen}
                        >{link.label}</Link>
                    ))}
                </div>
            </SheetContent>
        </Sheet>

    );
}

export default NavMobile;