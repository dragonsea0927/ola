import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface CurrentWorkProps {
  appImage: string
  appTitle: string
  appDescription: string
  link: string
  role: string
  year: string
}

const CurrentWork: React.FC<CurrentWorkProps> = ({ appImage, role, appTitle, appDescription, year, link }) => {
  return (
    <>
      <div data-aos="fade-up" className='flex flex-col gap-4 w-[95%] my-4 mx-auto p-2.5 lg:w-[90%] rounded-lg lg:flex-row md:items-center md:justify-between md:gap-5 shadow-2xl md:p-7 bg-[var(--contactBg)]'>
        <div className='card flex flex-col gap-4 lg:gap-3 lg:flex-row lg:items-center md:gap-2.5'>
          <Image src={appImage} alt='Ola' width={200} height={150} className='w-full h-full lg:w-[250px] lg:h-[150px] object-cover' />
          <div className='flex flex-col gap-1'>
            <p className='font-semibold text-[var(--textColor)]'>{year}</p>
            <h4 className='text-lg md:text-2xl font-semibold'>{appTitle}</h4>
            <h5 className='text-base md:text-lg font-medium'>{role}</h5>
            <p className='lg:w-[400px]'>
              {appDescription}
            </p>
          </div>
        </div>
        <Link href={link} target='_blank'
          rel='noopener noreferrer' className='border-none py-2.5 px-5 rounded-md cursor-pointer transi duration-500 ease-in-out bg-[var(--primary)] text-[var(--ctaText)] text-center'>
          View
        </Link>
      </div>
    </>
  )
}

export default CurrentWork