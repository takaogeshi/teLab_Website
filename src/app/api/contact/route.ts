import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, type, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Required fields missing' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.GMAIL_USER,
            to: 'geshi5@gmail.com',
            replyTo: email,
            subject: `[teLab Contact: ${type}] ${name}`,
            text: `
Name: ${name}
Email: ${email}
Type: ${type}

Message:
${message}
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
}
