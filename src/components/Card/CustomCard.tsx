import React from 'react'
import { styled } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CustomButton } from '..'
import Image from 'next/image'

const CardContainer = styled(Card)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
  borderRadius: '20px',
  padding: '30px',
  backgroundColor: '#ecf0f3',
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

const CardContentContainer = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
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

const CardMediaContainer = styled(CardMedia)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  padding: '80px',
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

interface CustomCardProps {
  image: string
  name: string
  description: string
  role?: string
  duration?: string
}

const CustomCard = ({ image, name, description, ...otherProps }: CustomCardProps) => {
  return (
    <CardContainer>
      <CardMediaContainer>
        <Image src={image} alt={name} width={300} height={300} />
      </CardMediaContainer>
      <CardContentContainer>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>
        <Typography gutterBottom variant='h5' component='div'>
          {otherProps?.role}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContentContainer>
    </CardContainer>
  )
}

export default CustomCard