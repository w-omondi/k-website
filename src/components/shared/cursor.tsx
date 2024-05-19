"use client"

import React from 'react';
import AnimatedCursor from "react-animated-cursor";
import {useMediaQuery} from "@react-hook/media-query";

function Cursor() {
    const isDesktop = useMediaQuery('only screen and (min-width: 768px)')
    if (!isDesktop) {
        return null
    }
    return (
        <>
            <AnimatedCursor
                innerStyle={{
                    backgroundColor: '#16a34a'
                }}
                color={"#16a34a"}
                innerSize={10}
                outerScale={2}
                outerSize={40}
                outerStyle={{
                    border: '3px solid #16a34a',
                    backgroundColor: "transparent"
                }}
            />
        </>
    );
}

export default Cursor;