import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Tailwind,
  Section,
} from '@react-email/components';
import * as React from 'react';

interface EmailProps {
  name: string
  email: string
  message: string
  subject: string
  number: string
}

export default function EmailTemplate(props: EmailProps) {
  const { name, email, message, subject, number } = props
  return (
    <Html lang='en'>
      <Head />
      <Preview>{subject || 'New message from Sender'}</Preview>
      <Body style={main}>
        <Tailwind>
          <Container
            className='w-full px-4 mx-auto bg-white'
          >
            <Section
              className='w-11/12 px-5 mx-auto my-14'
            >
              <Heading
                className='font-bold text-2xl text-center'
              >
                New message from {name || 'Sender'}
              </Heading>
              <div className='flex items-center justify-between mb-3'>
                <Text className='flex gap-1 items-center text-lg'>
                  <span className='font-bold text-base'>Email:</span> {email || 'No email provided'}
                </Text>
                <Text
                  className='flex gap-1 items-center text-lg'
                >
                  <span className='font-bold text-base'>Contact:</span> {number || 'No number provided'}
                </Text>
              </div>
              <Text
                className='text-lg text-justify'
              >
                {message || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam bibendum ullamcorper tortor, et tincidunt turpis interdum eu. Proin congue orci at auctor iaculis. Pellentesque congue nunc vitae posuere imperdiet. Quisque.'}
              </Text>
            </Section>
          </Container>
        </Tailwind>
      </Body>
    </Html>
  )
}


const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  marginTop: '30px'
};