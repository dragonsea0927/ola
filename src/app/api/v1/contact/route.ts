import { NextRequest } from 'next/server'
import { responseReturn } from '../../route';
import { Resend } from 'resend';
import EmailTemplate from '@/components/Email/email-template';


const resend = new Resend(process.env.RESEND_API_KEY);
interface Contact {
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

export async function POST(req: NextRequest) {
  const { name, email, number, subject, message }: Contact = await req.json()
  try {
    const { data, error } = await sendEmail({ name, email, number, subject, message });

    if (error) {
      return responseReturn(500, 'Email failed to send', 'error', null, error);
    }
    return responseReturn(200, {
      message: 'Email sent successfully',
      data: data
    }, 'success');
  } catch (error: any) {
    return responseReturn(500, 'Oops! Something happened!', 'error', null, error);
  }
}