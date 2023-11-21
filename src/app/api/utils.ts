import { NextResponse } from "next/server"
import { Resend } from 'resend';
import EmailTemplate from '@/components/Email/email-template';

export const responseReturn =
  (status: number, message: any, statusText: string, data?: any, error?: any) => {
    return NextResponse.json({
      status: statusText,
      message: message,
      data: data,
      error: error
    }, {
      status: status,
      headers: { "Content-Type": "application/json" },
    })
  }

const resend = new Resend(process.env.RESEND_API_KEY);
export interface Contact {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

export async function sendEmail({ name, email, number, subject, message }: Contact) {

  const options = {
    from: process.env.RESEND_FROM_EMAIL!,
    to: process.env.NEXT_PUBLIC_EMAIL!,
    subject: `New message from ${name} via your website`,
    react: EmailTemplate({ name, email, number, subject, message }),
  };
  const { data, error } = await resend.emails.send(options);

  return { data, error };
}