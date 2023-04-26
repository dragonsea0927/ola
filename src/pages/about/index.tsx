/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Layout } from '@/components'
import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'
import temImg from '@/assets/images/modalpic.jpeg'
import Image from 'next/image'

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textAlign: 'center',
  margin: '2rem auto',
  fontSize: '92.558px !important',
  fontWeight: 700,
  lineHeight: '1.1',
  letterSpacing: '-0.02em',

  [theme.breakpoints.down('sm')]: {
    color: 'blue',
  },
}))

const AboutPageContainerStyling = styled('div')(({ theme }) => ({
  h2: {
    fontSize: '45px',
    fontWeight: 600,
    lineHeight: '1.1',
    color: theme.palette.secondary.main,
  },

  '.current': {
    width: '90%',
    margin: '5rem auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',

    h2: {
      textAlign: 'center',
      margin: '2rem auto',
    },
  },
  [theme.breakpoints.down('sm')]: {
    color: 'blue',
  },
}))

const AboutInfoDiv = styled('div')(({ theme }) => ({
  width: '90%',
  margin: '5rem auto',
  display: 'flex',
  alignItems: 'center',
  gap: '5rem',

  img: {
    with: '100%',
    objectFit: 'fill',
    borderRadius: '200px 200px 0px 0px',
    transition: 'all 0.5s ease-in-out',
    zIndex: 1,

    '&:hover': {
      borderRadius: '0px 0px 200px 200px',
      transform: 'scale(1.1)',
    }
  },

  div: {
    width: '700px',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    gap: '2rem',

    p: {
      fontSize: '19px',
    },

  },

  [theme.breakpoints.down('sm')]: {
    color: 'blue',
  },
}))

const CurrentWorkItem = styled('div')(({ theme }) => ({
  width: '90%',
  backgroundColor: theme.white.main,
  margin: '1rem auto',
  borderRadius: '10px',
  boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
  padding: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',

  img: {
    borderRadius: '10px',
  },

  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.white.main,
    fontSize: '17px',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.5s ease-in-out',

    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    }
  },
}))

const AboutPage = () => {
  return (
    <Layout>
      <AboutPageContainerStyling>
        <StyledTypography variant='h1'>I'm Ola.</StyledTypography>
        <AboutInfoDiv>
          <Image src={temImg} alt='Ola' width={400} height={600} />
          <div>
            <Typography variant='h2'>I'm a Software Developer working remotely from Nigeria.</Typography>
            <Typography variant='body1'>
              I've spent the last few months collaborating and working on various projects ranging from landing pages to web applications, backend APIs, and I'm always looking for new opportunities to work on exciting projects.
            </Typography>

            <Typography variant='body1'>
              These days, I'm focused on building accessible, human-centered products, collaborating on open-source projects, and helping startups build better products.
            </Typography>
          </div>
        </AboutInfoDiv>
        <div className='current'>
          <Typography variant='h2'>Currently working on</Typography>
          <CurrentWorkItem>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Image src={temImg} alt='Ola' width={200} height={150} />
              <div>
                <Typography variant='body1'>2022-Present</Typography>
                <Typography variant='h4'>JobHunter</Typography>
                <Typography variant='h5'>FullStack Developer</Typography>
                <Typography variant='body1'>
                  Resume builder and job application tracker for african job seekers.
                </Typography>
              </div>
            </div>
            <button>
              Contact Me
            </button>
          </CurrentWorkItem>

          <CurrentWorkItem>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <Image src={temImg} alt='Ola' width={200} height={200} />
              <div>
                <Typography variant='body1'>2023-Present</Typography>
                <Typography variant='h4'>Juubix</Typography>
                <Typography variant='h5'>FullStack Developer</Typography>
                <Typography variant='body1'>
                  Juubix a decentralized Talents and Investors matching platform.
                </Typography>
              </div>
            </div>
            <button>
              Contact Me
            </button>
          </CurrentWorkItem>
        </div>
      </AboutPageContainerStyling>
    </Layout>
  )
}

export default AboutPage