'use client';

import React from 'react'
import { EditAboutForm } from '@/components'
import AboutImage from './AboutImage'
import CurrentWork from './CurrentWork'
import AboutContent from './AboutContent'
import ResumeTabs from './ResumeTabs'
import { useSession } from 'next-auth/react';
import { About } from '@/types'
import { useMediaQuery } from '@/hooks'
import Image from 'next/image'

interface AboutPageProps {
  data: any
}

const AboutPage = ({ data }: AboutPageProps) => {
  const { data: session }: any = useSession()
  const [isEditable, setIsEditable] = React.useState(false)
  const aboutData: About = data?.data[0]
  const { currentWorks, profileImgUrl } = aboutData

  const toggleEditable = () => {
    setIsEditable(!isEditable)
  }

  const userLoggedIn = session?.user?.email && session?.user?.role === 'admin'
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <main data-aos="fade-up" data-aos-duration="3000"
      className='w-full flex flex-col md:mt-10'
    >
      <h1 className='text-center my-4 font-bold text-7xl md:text-8xl text-[var(--textColor)] md:mb-10' data-aos="zoom-in-up">{"I'm Ola."}</h1>
      {isEditable && userLoggedIn ? (
        <>
          <EditAboutForm about={data} toggleEdit={toggleEditable} />
        </>
      ) : (
        <>
          <div className='w-[95%] flex flex-col gap-8 md:w-[100%] md:flex-row md:items-center md:gap-20' data-aos="fade-up">
            {isMobile ? <Image src={profileImgUrl} alt='Ola' width={300} height={400} className='profile w-[150px] h-[150px] rounded-full object-cover shadow-xl self-center' /> : <AboutImage photo={profileImgUrl} />}
            <div className='about'>
              <AboutContent content={data} />
            </div>
          </div>
          <div className='current w-[95%] my-8 mx-auto flex flex-col justify-between items-center md:w-[90%] md:my-12' data-aos="fade-up">
            <h2 className='text-center my-8 mx-auto text-2xl md:text-5xl'>Currently working on</h2>
            {currentWorks?.map((work, idx) => (
              <CurrentWork
                key={idx}
                appImage={work.imageUrl}
                year={work.date}
                appTitle={work.name}
                role={work.role}
                link={work.link}
                appDescription={work.description}
              />
            ))}
          </div>
          {userLoggedIn && <div className='btn-container flex justify-center items-center my-0 mx-auto w-1/2'>
            <button type='button' className='editBtn w-3/12 bg-[var(--cta)]text-[var(--ctaText)] border-none cursor-pointer rounded-md transition-all duration-300 ease-in-out text-lg' onClick={toggleEditable}>
              Edit
            </button>
          </div>}
        </>
      )}

      <div className='resume flex my-8 mx-auto md:mx-0 md:my-20 flex-col' data-aos="fade-up">
        <h2 className='sub-header text-center my-6 mx-auto text-2xl md:text-5xl font-semibold' data-aos="fade-up">My Resume</h2>
        <ResumeTabs />
      </div>
    </main>
  )
}

export default AboutPage