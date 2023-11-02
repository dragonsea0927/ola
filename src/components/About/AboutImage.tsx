import React from 'react'
import Image from 'next/image'
import { socialLinks } from '@/utils'
import Icons from '../IconsComponent/Icons'

interface AboutImage {
  photo: string;
}

const AboutImage = (props: AboutImage) => {
  const { photo } = props
  return (
    <div className='w-[10%] md:hidden lg:block lg:w-80 shadow[rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px] rounded-t-full' data-aos="fade-up">
      <Image src={photo} alt='Ola' width={300} height={400}
        className='w-full object-fill z-10 rounded-t-full transition-all duration-300 ease-in-out'
      />
      <div className='flex justify-around w-80 my-3'>
        {socialLinks.map((link) => (
          <Icons link={link} key={link.id} />
        ))}
      </div>
    </div>
  )
}

export default AboutImage