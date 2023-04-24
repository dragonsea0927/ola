import React from 'react'
import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'
import { socialLinks } from '@/utils'
import { Copyright, ContactForm, Icons, ScrollToView } from '@/components'
import Image from 'next/image'
import ContactImage from '@/assets/images/contact1.png'
import { useNavigation } from '@/hooks'

const FooterContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.text.dark,
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
    height: '100%',
    blockquote: {
      fontSize: '30px',
      color: theme.text.dark,
    },
  },
}))

const FooterBottom = styled('div')(({ theme }) => ({
  width: '85%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  margin: '80px auto',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '100%',
    margin: '20px auto',
    backgroundColor: theme.palette.primary.main,
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
  },

  p: {
    fontSize: '18px',
    fontWeight: 500,
  },

  [theme.breakpoints.down('sm')]: {
    height: '100%',
    h1: {
      fontSize: '25px',
      color: theme.text.dark,
    },

    p: {
      fontSize: '16px',
      color: theme.text.dark,
    },
  },
}))

const FooterSocialMedia = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '20px',
  paddingTop: '20px',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    width: '55px',
    height: '55px',
    boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
    borderRadius: '6px',
    backgroundColor: 'linear-gradient(45deg, #ff014f, #ff014f)',

    '&:hover': {
      backgroundColor: '#ff014f',
      color: theme.white.main,
      cursor: 'pointer',

      svg: {
        color: theme.white.main,
      },
    },

    svg: {
      fontSize: '25px',
      color: theme.text.dark,
    },
  },
  [theme.breakpoints.down('sm')]: {
    gap: '5px',
  },
}))

const FooterBottomBottom = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row-reverse',
  paddingTop: '20px',
  gap: '90px',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}))

const MediaBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '20px',
  boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
  backgroundColor: theme.white.main,
  borderRadius: '10px',
  a: {
    fontSize: '16px',
    fontWeight: 500,
    color: theme.text.dark,
    textDecoration: 'none',

  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}))

const ContactLeft = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  borderRadius: '10px',
  padding: '10px 7px',
  img: {
    objectFit: 'cover',
    borderRadius: '10px',
    alignSelf: 'center',
  },

  '.contact-inner': {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },

  '.contact-inner-text': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px',

    h4: {
      fontSize: '29px',
      fontWeight: 700,
      color: theme.text.dark,
    },

    p: {
      fontSize: '18px',
      letterSpacing: 'normal',
    }
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    padding: '20px',
  },
}))

const BottomNav = () => {
  const { router } = useNavigation()
  return (

    <FooterContainer>
      {router.pathname === '/create' || router.pathname === '/projects' ? '' : (
        <>
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
        </>
      )}

      {router.pathname === '/create' || router.pathname === '/projects' ? '' : (
        <>
          <FooterBottom>

            <FooterBottomTop>
              <Typography variant='h1'>
                Let's work together.
              </Typography>

              <Typography variant='body1'>
                Let's work together to build something great.
              </Typography>
            </FooterBottomTop>

            <ScrollToView data-target='contact-form' id='scroll'>
              <FooterBottomBottom>
                <ContactForm />
                <MediaBox>
                  <ContactLeft>
                    <Image src={ContactImage} alt='contact image' width={460} height={200} />
                    <div className='contact-inner'>
                      <div className='contact-inner-text'>
                        <Typography variant='h4'>
                          Ola Ishola
                          <br />
                          <Typography variant='body1'>
                            Software Developer
                          </Typography>
                        </Typography>

                        <Typography variant='body1'>
                          I am available for collaboration & freelance work. Connect with me on social media or send me an email.
                        </Typography>

                        <Typography variant='body1'>
                          Phone: +234 8110837448
                          <br />
                          Email: olaishola@hotmail.co.uk
                        </Typography>
                      </div>
                      <FooterSocialMedia>
                        {socialLinks.map((link) => (
                          <div key={link.id}>
                            <Icons link={link} key={link.id} />
                          </div>
                        ))}
                      </FooterSocialMedia>
                    </div>
                  </ContactLeft>
                </MediaBox>
              </FooterBottomBottom>
            </ScrollToView>
          </FooterBottom>
          <Copyright />
        </>
      )
      }
    </FooterContainer >

  )
}

export default BottomNav