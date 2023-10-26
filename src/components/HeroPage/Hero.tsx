'use client';

import React from 'react'
import { CustomButton, Icons } from '..'
import { socialLinks } from '../../utils'
import Link from 'next/link'
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <main
      className='flex p-2 w-full h-[55vh] my-[10px] mx-auto gap-10 relative md:flex-row md:py-0 md:px-5 md:my-12 md:h-[50vh] lg:h-[75vh] lg:flex-col lg:my-12 lg:mx-auto md:w-[90%] lg:w-[100%] md:gap-8'
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className='w-full flex flex-col gap-4 md:gap-6 lg:gap-7'>
        <h1 className='text-4xl md:text-7xl md:mt-12 lg:text-9xl'>Hello! { }
          {"I'm"} <span className='text-[var(--primary)] font-semibold' >Ola</span>,
          <br />
          <TypeAnimation
            cursor={true}
            sequence={['Software Developer', 500, 'Frontend Developer', 500, 'Backend Developer', 500, 'Technical Writer.', 500]}
            repeat={Infinity}
            className='text-2xl md:text-5xl lg:text-8xl font-bold'
          />
        </h1>
        <p
          className='intro self-center w-full text-justify md:text-center md:w-[600px] lg:w-[900px] font-light text-base md:text-lg lg:text-xl text-[var(--textColor)]'
          data-aos="zoom-in-up" data-aos-duration="8000">
          Hi there! {"I'm"} a software developer based in Nigeria. I help businesses & startups to develop accessible, human-centered products that meet their {"customers'"} needs.

        </p>
        <div className='self-center flex justify-center gap-5 w-full mt-6'>
          <CustomButton
            variant='outlined'
            onClick={() => { console.log('clicked') }}
          >My works</CustomButton>
          <Link
            href={`${process.env.NEXT_PUBLIC_RESUME_URL}`}
            target='_blank'
            rel='noopener noreferrer'
            className='w-[200px] h-[45px] px-3 py-5 rounded-full leading-4 tracking-tighter shadow-lg flex items-center justify-center gap-10 text-base md:text-lg text-[var(--ctaText)] bg-[var(--cta)] border border-[var(--primary)] hover:bg-white hover:text-[var(--cta)] hover:border hover:border-[var(--cta)]'
          >Hire me</Link>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000"
        className='absolute bottom-5 flex p-0 gap-2 my-0 text-3xl md:flex-col md:gap-3 md:my-0 md:mx-0 md:mb-5 md:fixed md:right-0 md:bottom-0 md:z-10'
      >
        {socialLinks.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            target='_blank'
            rel='noopener noreferrer'
            data-aos="zoom-in-up" data-aos-duration="8000"
          >
            <Icons link={link} />
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Hero