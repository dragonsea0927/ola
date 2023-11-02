import React from 'react'
import { About } from '@/types'

interface Props {
  content: any
}

const AboutContent = ({ content }: Props) => {
  const { intro, title, transitionOne, transitionTwo, focused, hobbies } = content?.data[0]
  return (
    <main className='w-full'>
      <h2 className='font-bold text-3xl md:text-6xl my-4 text-center mb-8'>{title}</h2>
      <p className='text-justify text-base mb-4'>
        {intro}
      </p>

      <p className='text-justify text-base mb-4'>
        {focused}
      </p>

      <p className='text-justify text-base mb-4'>
        {transitionOne}
      </p>

      <p className='text-justify text-base mb-4' data-aos="zoom-in-up">
        {transitionTwo}
      </p>

      <p className='text-justify text-base mb-4' data-aos="zoom-in-up">
        {hobbies}
      </p>

    </main>
  )
}

export default AboutContent