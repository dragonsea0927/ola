import React from 'react'
import { styled } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CustomButton } from '..'
import Image from 'next/image'

const CardContainer = styled(Card)(({ theme }) => ({
  width: '451px',
  height: '451px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
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
  padding: '0px',
  border: '1px solid red',
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
  width: '100%',
  margin: 'auto',
  borderRadius: '20px',

  img: {
    borderRadius: '10px',
  },
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

const CardMediaTop = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid red',
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
  image: any
  name: string
  description: string
  role?: string
  duration?: string
}

const CustomCard = ({ image, name, description, ...otherProps }: CustomCardProps) => {
  return (
    <CardContainer>
      <CardMediaContainer>
        <Image src={image} alt={name} width={400} height={300} />
      </CardMediaContainer>
      <CardContentContainer>
        <CardMediaTop>
          <Typography variant='body1' component='div'>
            {name}
          </Typography>
          <Typography variant='body1' component='div'>
            {otherProps?.role}
          </Typography>
        </CardMediaTop>
        <Typography variant='body2' color='text.secondary'>
          {description}
        </Typography>
      </CardContentContainer>
    </CardContainer>
  )
}

export default CustomCard