import React from 'react'
import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'


const AboutContainer = styled(Grid)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  margin: 'auto',
  backgroundColor: theme.palette.primary.main,
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
    <AboutContainer>AboutSection</AboutContainer>
  )
}

export default AboutSection