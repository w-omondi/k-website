import {NextRequest, NextResponse} from "next/server";
import {Resend} from 'resend';


export async function POST(request: NextRequest) {

    try {
        const {email, name, message} = await request.json()
        const firstName = name?.split(" ")[0]
        console.log({email, name, message})

        const resend = new Resend(process.env.RESEND_API_KEY);

        const response = await resend.emails.send({
            from: `${email}`,
            to: `onboarding@resend.dev`,
            subject: 'Hello World',
            html: message
        });

        console.log({response})

        if (response.error !== null) {
            return NextResponse.json("Internal server error", {
                status: 500,
            })
        }

        return NextResponse.json("Message sent", {
            status: 200,
        })

    } catch (e) {
        return NextResponse.json("Internal server error", {
            status: 500,
        })
    }

}