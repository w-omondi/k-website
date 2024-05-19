import React from 'react';
import {Toaster} from "@/components/ui/sonner";
import AnimatedCursor from "react-animated-cursor";

function Hoisted({children}: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <Toaster/>
            <AnimatedCursor
                innerStyle={{
                    backgroundColor: '#16a34a'
                }}
                innerSize={10}
                outerScale={3}
                outerSize={30}
                outerStyle={{
                    border: '3px solid #16a34a',
                    backgroundColor:"transparent"
                }}
            />
        </>
    );
}

export default Hoisted;