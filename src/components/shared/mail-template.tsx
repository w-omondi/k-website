import React from 'react';
import {IFormData} from "@/components/shared/contact/get-in-touch";


interface EmailTemplateProps extends IFormData {
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = (props) => (
    <div>
        <ul>
            <li>Name: {props.name}</li>
            <li>Email: {props.email}</li>
        </ul>
        <h1>Hello Klinfuture</h1>
        <p>{props.message}</p>
    </div>
);