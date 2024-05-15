import {NextRequest, NextResponse} from "next/server";
import {Resend} from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {

    try {
        const {email, name, message} = await request.json()
        console.log({email, name, message})


        const response = await resend.emails.send({
            from: `info@klinfuture.com`,
            to: [`washingnd@gmail.com`,],
            subject: 'Hello World',
            html: `My is name: ${name}, email: ${email}, message: ${message}`
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