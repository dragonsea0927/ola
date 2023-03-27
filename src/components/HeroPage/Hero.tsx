import React from 'react'
import { Box, styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CustomButton } from '..'
import { socialLinks } from '../../utils'
import Link from '@mui/material/Link'
import { TypeAnimation } from 'react-type-animation';

const GridContainer = styled(Grid)(({ theme }) => ({
  margin: '100px auto',
  padding: '0px 20px',
  gap: '30px',
  position: 'relative',
  borderBottom: '1px solid #fff',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: '20px auto',
    h1: {
      fontSize: '30px',
    }
  },

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
    padding: '0px 20px',
    h1: {
      fontSize: '38px',
    }
  },

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'column',
    margin: '50px auto',
    h1: {
      fontSize: '120px',
    }
  },

})

)

const GridItem = styled(Grid)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  margin: 'auto',
  [theme.breakpoints.down('sm')]: {
    padding: '16px',
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
    width: '90%',
    h1: {
      textAlign: 'center',
    },
    p: {
      textAlign: 'center',
      margin: 'auto',
    }
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
    width: '90%',
    h1: {
      textAlign: 'center',
    },
    p: {
      textAlign: 'center',
      padding: '10px 16px',
    }
  },
}))

const ButtonContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
    justifyContent: 'center',
    button: {
      padding: '10px 15px',
    }
  },

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'center',
  },

  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '80px',
  },
}))

const SocialMedia = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '15px',
  padding: '0px 0px 16px 16px',
  a: {
    textTransform: 'capitalize',
    cursor: 'pointer',
    color: theme.text.dark,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    },
  },
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },

  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },

  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    position: 'absolute',
    top: 410,
    right: 0,
    bottom: 40,
    transformOrigin: '220px 40px',
    transform: 'rotate(90deg)',
  },
}))


const Hero = () => {
  return (
    <GridContainer container spacing={2}>
      <GridItem item xs={12} sm={12} md={12}>
        <Typography variant='h1'>Hello
          I'm <Box component='span' sx={{ color: 'secondary.main' }}>Ola</Box>,
          <br />
          <TypeAnimation
            cursor={true}
            sequence={['Software Developer', 500, 'Frontend Developer', 500, 'Backend Developer', 500, 'Technical Writer.', 500]}
            repeat={Infinity}
          />
        </Typography>
        <Typography variant='body1' sx={{ width: { xs: '100%', sm: '100%', md: '50%', } }}>
          Hi there! I'm a software developer based in Nigeria. I have a
          passion for building web applications and I'm always looking for new
          opportunities to learn and grow.
        </Typography>
        <ButtonContainer>
          <CustomButton
            variant='outlined'
            color='secondary'
            width='150px'
            onClick={() => { console.log('clicked') }}
          >See my works</CustomButton>
          <CustomButton
            variant='contained'
            color='secondary'
            width='150px'
            onClick={() => { console.log('clicked') }}
          >Hire me</CustomButton>
        </ButtonContainer>
      </GridItem>
      <SocialMedia>
        {socialLinks.map((link) => (
          <Link
            key={link.id}
          >
            {link.title} </Link>
        ))}
      </SocialMedia>

    </GridContainer>
  )
}

export default Hero