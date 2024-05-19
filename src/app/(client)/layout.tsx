import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import Hoisted from "@/app/(client)/hoisted";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Klinfuture",
    description: "Your partner in technology",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Hoisted>{children}</Hoisted>
        </body>
        </html>
    );
}
