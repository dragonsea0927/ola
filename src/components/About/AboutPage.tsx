// /* eslint-disable react/no-unescaped-entities */
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


// const StyledTypography = styled(Typography)(({ theme }) => ({
//   color: theme.palette.secondary.main,
//   textAlign: 'center',
//   margin: '1rem auto',
//   fontSize: '92.558px !important',
//   fontWeight: 700,
//   lineHeight: '1.1',
//   letterSpacing: '-0.02em',

//   [theme.breakpoints.down('sm')]: {
//     fontSize: '80px !important',
//   },
// }))

// const AboutPageContainerStyling = styled('div')(({ theme }) => ({
//   width: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   h2: {
//     fontSize: '45px',
//     fontWeight: 600,
//     lineHeight: '1.1',
//   },

//   '.current': {
//     width: '90%',
//     margin: '3rem auto',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'space-between',
//     alignItems: 'center',

//     h2: {
//       textAlign: 'center',
//       margin: '2rem auto',
//     },

//   },
//   '.resume': {

//     '.sub-header': {
//       textAlign: 'center',
//       margin: '2rem auto',
//     },
//   },

//   '.btn-container': {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: '0 auto',
//     width: '50%',

//     '.editBtn': {
//       width: '20%',
//       height: '3rem',
//       backgroundColor: theme.palette.secondary.main,
//       color: theme.white.main,
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       transition: 'all .3s ease-in-out',
//       fontSize: '1.2rem',
//       '&:hover': {
//         backgroundColor: theme.white.main,
//         color: theme.palette.secondary.main,
//       },
//     },
//   },

//   [theme.breakpoints.down('sm')]: {
//     width: '100%',
//     h2: {
//       fontSize: '20px',
//     },

//     '.current': {
//       width: '95%',
//       margin: '2rem auto',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//     },
//   },
// }))

// const AboutInfoDiv = styled('div')(({ theme }) => ({
//   width: '90%',
//   margin: '5rem auto',
//   display: 'flex',
//   alignItems: 'center',
//   gap: '5rem',

//   '.about': {
//     borderRadius: '20px',
//     boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     padding: theme.spacing(4),
//     gap: '2rem',
//     backgroundColor: theme.palette.primary.light,

//     p: {
//       fontSize: '19px',
//     },

//   },

//   [theme.breakpoints.down('sm')]: {
//     width: '95%',
//     flexDirection: 'column',
//     gap: '2rem',
//     margin: '2rem auto',

//     '.about': {
//       width: '100%',
//       padding: theme.spacing(2),
//       gap: '1rem',
//       backgroundColor: 'transparent',

//       p: {
//         fontSize: '1rem',
//       },

//     },

//     '.profile': {
//       width: 150,
//       height: 150,
//       borderRadius: '50%',
//       objectFit: 'cover',
//       boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
//     },
//   },
// }))

// const StyledResumeSection = styled('section')(({ theme }) => ({
//   margin: '5rem auto',
//   display: 'flex',
//   flexDirection: 'column',

//   [theme.breakpoints.down('sm')]: {
//     margin: '2rem auto',
//   },
// }))

interface AboutPageProps {
  data: any
}



const AboutPage = ({ data }: AboutPageProps) => {
  const { data: session } = useSession()
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
            {isMobile ? <Image src={profileImgUrl} alt='Ola' width={300} height={400} className='profile' /> : <AboutImage photo={profileImgUrl} />}
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
                appDescription={work.description}
              />
            ))}
          </div>
          {userLoggedIn && <div className='btn-container'>
            <button type='button' className='editBtn' onClick={toggleEditable}>
              Edit
            </button>
          </div>}
        </>
      )}

      <div className='resume' data-aos="fade-up">
        <h2 className='sub-header text-center my-8 mx-auto text-2xl md:text-5xl font-semibold' data-aos="fade-up">My Resume</h2>
        <ResumeTabs />
      </div>
    </main>
  )
}

export default AboutPage