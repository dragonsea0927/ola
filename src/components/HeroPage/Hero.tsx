import React from 'react'
import { Box, styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CustomButton } from '..'
import HeroImg from '../../assets/svg/dev.svg'
import Image from 'next/image'
import { socialLinks } from '../../utils'
import Link from '@mui/material/Link'
import { TypeAnimation } from 'react-type-animation';

const GridContainer = styled(Grid)(({ theme }) => ({
  width: '90%',
  margin: '80px auto',
  padding: '0px 20px',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    margin: '20px auto'
  },

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },

})

)

const GridItemOne = styled(Grid)(({ theme }) => ({
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
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },
}))

const GridItemTwo = styled(Grid)(({ theme }) => ({
  width: '50%',
  paddingLeft: '70px',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },

  [theme.breakpoints.up('md')]: {
    display: 'block',
  },

  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
}))

const SocialMedia = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '15px',
  padding: '0px 0px 16px 16px',
  [theme.breakpoints.down('sm')]: {
    display: 'flex',
  },

  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },

  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}))


const Hero = () => {
  return (
    <GridContainer container spacing={2}>
      <GridItemOne item xs={12} sm={6} md={6}>
        <Typography variant='h1'>Hello <br />
          I'm <Box component='span' sx={{ color: 'secondary.main' }}>Ola</Box>,
          <br />
          <TypeAnimation
            cursor={true}
            sequence={['Software Developer', 500, 'Frontend Developer', 500, 'Backend Developer', 500, 'Technical Writer.', 500]}
            repeat={Infinity}
          />
        </Typography>
        <Typography variant='body1' sx={{ width: { xs: '100%', sm: '100%', md: '95%' } }}>
          Hi there! I'm a software developer based in Nigeria. I have a
          passion for building web applications and I'm always looking for new
          opportunities to learn and grow.
        </Typography>
        <CustomButton
          variant='outlined'
          color='secondary'
          width='150px'
          onClick={() => { console.log('clicked') }}
        >See my works</CustomButton>
      </GridItemOne>

      <GridItemTwo item xs={false} sm={6} md={6}>
        <Image
          src={HeroImg}
          alt='hero'
          width={400}
          height={400}
        />
      </GridItemTwo>

      <SocialMedia>
        {socialLinks.map((link) => (
          <Link
            key={link.id}
            sx={{
              color: 'text.primary',
              textTransform: 'capitalize',
              cursor: 'pointer',
              textDecoration: 'none', '&:hover': { color: 'secondary.main' }
            }}
          >
            {link.title} </Link>
        ))}
      </SocialMedia>

    </GridContainer>
  )
}

export default Hero