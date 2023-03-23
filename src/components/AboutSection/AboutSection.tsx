import React from 'react'
import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import Link from 'next/link'


const AboutContainer = styled(Grid)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  backgroundColor: theme.palette.primary.dark,
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

}))

const AboutContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  padding: '80px',
  backgroundColor: theme.palette.primary.dark,
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

}))

const AboutSection = () => {
  return (
    <AboutContainer>
      AboutSection
      <AboutContent>
        <h1>About Me</h1>
        <p>
          I am a software engineer with a passion for building scalable and
          maintainable software. I have a strong background in web development
          with a focus on the MERN stack. I am also a self-taught UI/UX designer
          with a keen eye for detail and a passion for creating beautiful
          interfaces.
        </p>
        <p>
          I am currently working as a software engineer at{' '}
          <Link href="https://www.zebra.com/us/en.html" target="_blank">
            Zebra Technologies
          </Link>
          , where I am responsible for building and maintaining the company's
          internal web applications.
        </p>
        <p>
          I am also a self-taught UI/UX designer with a keen eye for detail and
          a passion for creating beautiful interfaces.
        </p>
        <p>
          I am currently working as a software engineer at{' '}
          <Link href="https://www.zebra.com/us/en.html" target="_blank">
            Zebra Technologies
          </Link>
          , where I am responsible for building and maintaining the company's
          internal web applications.
        </p>
      </AboutContent>
    </AboutContainer>
  )
}

export default AboutSection