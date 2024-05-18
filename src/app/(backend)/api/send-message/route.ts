import {NextRequest, NextResponse} from "next/server";
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {

    try {
        const {email, name, message} = await request.json()

        const data = {
            service_id: process.env.SERVICE_ID,
            template_id: process.env.TEMPLATE_ID,
            user_id: process.env.USER_ID,
            accessToken: process.env.ACCESS_TOKEN,
            template_params: {
                message: message,
                from_name: name,
                from_email: email,
                reply_to: email,
                to_name: "Klinfuture",
            }
        };

        const response = await fetch(
            "https://api.emailjs.com/api/v1.0/email/send",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        )

        console.log(response.status)


        if (!response.ok) {
            return NextResponse.json({message: "Internal server error"}, {
                status: 500,
            })
        }

        return NextResponse.json("Message sent", {
            status: 200,
        })

    } catch (e) {
        console.error(e)
        return NextResponse.json({message: "Internal server error"}, {
            status: 500,
        })
    }

}