import React from 'react'
import { styled } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { CustomButton } from '..'

const CardContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px',
  boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
  borderRadius: '20px',
  padding: '20px',
  backgroundColor: '#ecf0f3',
  button: {
    display: 'none',
  },
  '&:hover': {

    img: {
      transform: 'scale(1.04)',
    },

    div: {
      color: 'red',
      cursor: 'pointer',
    },

    button: {
      display: 'block',
      alignSelf: 'center',
    },
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

const CardContentContainer = styled(CardContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '0px',
  gap: '6px',
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
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'tranform 0s'
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
  marginBottom: '10px',

  h6: {
    color: theme.palette.secondary.main,
  },

  p: {
    color: theme.palette.secondary.main,
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

interface CustomCardProps {
  image: any
  name: string
  description: string
  role?: string
  duration?: string
  onClick?: () => void
}

const CustomCard = ({ image, name, description, ...otherProps }: CustomCardProps) => {
  return (
    <CardContainer>
      <CardMediaContainer>
        <Image src={image} alt={name} />
      </CardMediaContainer>
      <CardContentContainer>
        <CardMediaTop>
          <Typography variant='h6' component='h6'>
            {name}
          </Typography>
          <Typography variant='body1'>
            {otherProps?.role}
          </Typography>
        </CardMediaTop>
        <Typography variant='body2' color='text.dark' component='div'>
          {description}
        </Typography>
        <CustomButton variant='text' color='secondary' width='130px'
          onClick={otherProps?.onClick}
        >
          Show More
        </CustomButton>
      </CardContentContainer>
    </CardContainer>
  )
}

export default CustomCard