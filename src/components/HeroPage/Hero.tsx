import React from 'react'
import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { CustomButton } from '..'
import HeroImg from '../../assets/svg/dev.svg'
import Image from 'next/image'

const GridContainer = styled(Grid)(({ theme }) => ({
  width: '90%',
  margin: '80px auto',
  border: '1px solid red',
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
  width: '100%',
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
  // border: '1px solid green',
}))


const Hero = () => {
  return (
    <GridContainer container spacing={2}>
      <GridItemOne item xs={12} sm={12} md={6}>
        <Typography variant='h1'>Software Developer.</Typography>
        <Typography variant='body1'>
          Hi there! I'm Ola, a software developer based in Nigeria. I have a
          passion for building web applications and I'm always looking for new
          opportunities to learn and grow.
        </Typography>
        <CustomButton
          variant='outlined'
          color='secondary'
          width='150px'
        >See my works</CustomButton>
      </GridItemOne>

      <GridItemTwo item xs={false} sm={false} md={6}>
        <Image
          src={HeroImg}
          alt='hero'
          width={400}
          height={400}
        />
      </GridItemTwo>
    </GridContainer>
  )
}

export default Hero