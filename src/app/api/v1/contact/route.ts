import { NextRequest } from 'next/server'
import { responseReturn, Contact, sendEmail } from '../../utils';

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