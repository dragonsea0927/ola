/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { EditAboutForm, Layout } from '@/components'
import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'
import AboutImage from './AboutImage'
import temImg from '@/assets/images/modalpic.jpeg'
import CurrentWork from './CurrentWork'
import AboutContent from './AboutContent'
import ResumeTabs from './ResumeTabs'
import { useSession } from 'next-auth/react';
import { About } from '@/types'
import { useMediaQuery } from '@/hooks'
import Image from 'next/image'


const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textAlign: 'center',
  margin: '1rem auto',
  fontSize: '92.558px !important',
  fontWeight: 700,
  lineHeight: '1.1',
  letterSpacing: '-0.02em',

  [theme.breakpoints.down('sm')]: {
    fontSize: '80px !important',
  },
}))

const AboutPageContainerStyling = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  h2: {
    fontSize: '45px',
    fontWeight: 600,
    lineHeight: '1.1',
  },

  '.current': {
    width: '90%',
    margin: '3rem auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    h2: {
      textAlign: 'center',
      margin: '2rem auto',
    },

  },
  '.resume': {

    '.sub-header': {
      textAlign: 'center',
      margin: '2rem auto',
    },
  },

  '.btn-container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto',
    width: '50%',

    '.editBtn': {
      width: '20%',
      height: '3rem',
      backgroundColor: theme.palette.secondary.main,
      color: theme.white.main,
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all .3s ease-in-out',
      fontSize: '1.2rem',
      '&:hover': {
        backgroundColor: theme.white.main,
        color: theme.palette.secondary.main,
      },
    },
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    h2: {
      fontSize: '20px',
    },

    '.current': {
      width: '95%',
      margin: '2rem auto',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
}))

const AboutInfoDiv = styled('div')(({ theme }) => ({
  width: '90%',
  margin: '5rem auto',
  display: 'flex',
  alignItems: 'center',
  gap: '5rem',

  '.about': {
    borderRadius: '20px',
    boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(4),
    gap: '2rem',
    backgroundColor: theme.palette.primary.light,

    p: {
      fontSize: '19px',
    },

  },

  [theme.breakpoints.down('sm')]: {
    width: '95%',
    flexDirection: 'column',
    gap: '2rem',
    margin: '2rem auto',

    '.about': {
      width: '100%',
      padding: theme.spacing(2),
      gap: '1rem',
      backgroundColor: 'transparent',

      p: {
        fontSize: '1rem',
      },

    },

    '.profile': {
      width: 150,
      height: 150,
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
    },
  },
}))

const StyledResumeSection = styled('section')(({ theme }) => ({
  margin: '5rem auto',
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.down('sm')]: {
    margin: '2rem auto',
  },
}))

interface AboutPageProps {
  data: About[]
}



const AboutPage = (props: AboutPageProps) => {
  const { data: session } = useSession()
  const [isEditable, setIsEditable] = React.useState(false)
  const { data } = props
  const { currentWorks, profileImgUrl } = data[0]

  const toggleEditable = () => {
    setIsEditable(!isEditable)
  }
  const userLoggedIn = session?.user?.email && session?.user?.role === 'admin'
  const isMobile = useMediaQuery('(max-width: 600px)')

  return (
    <Layout>
      <AboutPageContainerStyling>
        <StyledTypography variant='h1'>I'm Ola.</StyledTypography>
        {isEditable && userLoggedIn ? (
          <>
            <EditAboutForm about={data} toggleEdit={toggleEditable} />
          </>
        ) : (
          <>
            <AboutInfoDiv>
              {isMobile ? <Image src={profileImgUrl} alt='Ola' width={300} height={400} className='profile' /> : <AboutImage photo={profileImgUrl} />}
              <div className='about'>
                <AboutContent content={data} />
              </div>
            </AboutInfoDiv>
            <div className='current'>
              <Typography variant='h2'>Currently working on</Typography>
              {currentWorks?.map((work, idx) => (
                <CurrentWork
                  key={idx}
                  appImage={work.imageUrl || temImg}
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

        <StyledResumeSection className='resume'>
          <Typography variant='h2' className='sub-header'>My Resume</Typography>
          <ResumeTabs />
        </StyledResumeSection>
      </AboutPageContainerStyling>

    </Layout>
  )
}

export default AboutPage