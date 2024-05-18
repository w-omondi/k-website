import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";

export interface ServiceContainerProps {
    title: string;
    description: string;
    image: string;

}

function ServiceCard({title, description, image}: ServiceContainerProps) {
    return (
        <Card>
            <CardHeader className={"space-y-4"}>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className={`px-6`}>
                <div className={`w-full h-[250px] md:h-[350px] bg-gray-50 rounded`}>
                    <Image
                        className="relative w-full h-[250px] md:h-[350px] object-contain"
                        src={image}
                        alt="Klinfuture Logo"
                        width={200}
                        height={200}
                        priority
                    />
                </div>
            </CardContent>
        </Card>
    );
}

export default ServiceCard;