import React from 'react';
import {links} from "@/components/shared/navigation/navigation";
import Link from "next/link";

function NavDesktop() {
    return (
        <ul className={"flex flex-row items-center justify-center gap-6 font-bold text-slate-800"}>
            {links.map(link => <li key={link.value}><Link href={link.value}>{link.label}</Link></li>)}
        </ul>
    );
}

export default NavDesktop;