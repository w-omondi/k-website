import React from 'react';
import {Toaster} from "@/components/ui/sonner";
import AnimatedCursor from "react-animated-cursor";
import Cursor from "@/components/shared/cursor";

function Hoisted({children}: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <Toaster/>
            <Cursor/>
        </>
    );
}

export default Hoisted;