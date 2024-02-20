import { NextResponse } from "next/server"

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(req: Request) {
    const { name, phone, email, project, message } = await req.json()

    if (!name || !phone || ! email || !project || !message) {
        return NextResponse.json({ error: 'Fields not filled in the form...' }, { status: 400 })
    }

    const msg = {
        to: 'todd@rosamondconstruction.com',
        from: 'support@vjxsoft.com', 
        replyTo: email,
        subject: `Customer: ${name} Phone: ${phone} Project ${project} Email: ${email}`,
        text: message,
    }

    return sgMail
        .send(msg)
        .then(() => {
            return NextResponse.json({message: 'All good, email sent'}, { status: 200 })
        })
        .catch((error: any) => {
            return NextResponse.json({error: error}, { status: 500 })
        })

}