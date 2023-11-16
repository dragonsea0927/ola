import sgMail from '@sendgrid/mail';
import { NextRequest } from 'next/server'
const toEmail = process.env.SEND_TO_EMAIL;
const fromEmail = process.env.SENDGRID_FROM_EMAIL;
import { render } from '@react-email/render';
import Email from '../../../../../react-email-starter/emails/Email';
import { responseReturn } from '../../route';
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

interface Contact {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

// export async function sendEmail({ name, email, number, subject, message }: Contact) {
//   sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
//   const renderEmail = render(Email({ name, email, number, subject, message }));

//   const options = {
//     from: fromEmail!,
//     to: toEmail,
//     subject: `New message from ${name} via your website`,
//     html: renderEmail,
//   };
//   return await sgMail.send(options);
// }

export async function POST(req: NextRequest) {
  const { name, email, number, subject, message } = await req.json()
  try {
    // const renderEmail = render(Email({ name, email, number, subject, message }));

    const options = {
      to: toEmail,
      from: fromEmail!,
      subject: `New message from ${name} via your website`,
      html: render(Email({ name, email, number, subject, message })),
    };
    await sgMail.send(options).then(() => {
      console.log('Email sent');
    }
    ).catch((error) => {
      console.error(error);
    });
    return responseReturn(200, 'Email sent successfully', 'success');
  } catch (error: any) {
    return responseReturn(500, 'Email failed to send', 'error', null, error);
  }
}