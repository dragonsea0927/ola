import React from 'react'
import { Link, styled } from '@mui/material'
import Typography from '@mui/material/Typography'
// import ContactForm from '../Form/ContactForm'
import { socialLinks } from '@/utils'
import { Copyright, ContactForm } from '@/components'

const FooterContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: 'black',
  color: theme.white.main,
  [theme.breakpoints.down('sm')]: {
    height: '100%',
  },
}))

const FooterTop = styled('div')(({ theme }) => ({
  width: '100%',
  height: '400px',
  backgroundColor: theme.white.main,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: 500,

  blockquote: {
    width: '80%',
    margin: 'auto',
    padding: '20px',
    fontSize: '55px',
    fontWeight: 500,
    textAlign: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    height: '200px',
  },
}))

const FooterBottom = styled('div')(({ theme }) => ({
  width: '80%',
  height: '100%',
  backgroundColor: 'black',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '40px auto',
  [theme.breakpoints.down('sm')]: {
    height: '50px',
  },
}))

const FooterBottomTop = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '10px',
  padding: '20px',
  h1: {
    fontSize: '45px',
    fontWeight: 700,
    color: theme.white.main,
  },

  p: {
    fontSize: '18px',
    fontWeight: 500,
    color: theme.white.main,
  },

  [theme.breakpoints.down('sm')]: {
    height: '50px',
  },
}))

const FooterSocialMedia = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '10px',
  // padding: '20px 0px',

  a: {
    color: theme.white.main,
    fontSize: '16px',
    textDecoration: 'none',
    cursor: 'pointer',
    textTransform: 'capitalize',
    '&:hover': {
      color: theme.palette.primary.dark,
    }
  },
}))

const FooterBottomBottom = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  gap: '10px',
  padding: '20px',
  // border: '1px solid red',
}))

const MediaBox = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
  gap: '10px',
  padding: '20px',
  // border: '1px solid red',

  a: {
    fontSize: '16px',
    fontWeight: 500,
    color: theme.white.main,
    textDecoration: 'none',
  },
}))


const BottomNav = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <Typography variant='h1'>
          <blockquote>
            <p>
              <strong>“</strong>
              <em>
                Choose a job you love, and you will never have to work a day in your life.
              </em>
              <strong>”</strong>

              <br />
              <br />
              <em>
                - Confucius
              </em>
            </p>
          </blockquote>
        </Typography>
      </FooterTop>
      <FooterBottom>
        <FooterBottomTop>
          <Typography variant='h1'>
            Let's work together.
          </Typography>

          <Typography variant='body1'>
            Let's work together to build something great.
          </Typography>
        </FooterBottomTop>

        <FooterBottomBottom>
          <ContactForm />
          <MediaBox>
            <FooterSocialMedia>
              {socialLinks.map((link, index) => (
                <Link key={link.id}>{link.title}</Link>
              ))}
            </FooterSocialMedia>
            <Link href='mailto:olaishola@hotmail.co.uk'>
              olaishola@hotmail.co.uk
            </Link>
          </MediaBox>
        </FooterBottomBottom>
      </FooterBottom>
      <Copyright />
    </FooterContainer>
  )
}

export default BottomNav