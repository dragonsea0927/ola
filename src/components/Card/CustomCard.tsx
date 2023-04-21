import React from 'react'
import { styled } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { CustomButton } from '..'
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';

const CardContainer = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '10px',
  boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
  borderRadius: '20px',
  padding: '20px',
  backgroundColor: '#ecf0f3',
  position: 'relative',
  '&:hover': {
    '.overlay': {
      opacity: 1,
      transform: 'scale(1)',
    },

    img: {
      transform: 'scale(1.01)',
    },
    cursor: 'pointer',
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
    height: '230px',
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

  '.duration': {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
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
  overlayText?: string
  onClick?: () => void
}

const OverlayDiv = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  opacity: 0,
  transition: '.3s ease',
  backgroundColor: theme.palette.primary.dark,

  button: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    'msTransform': 'translate(-50%, -50%)',
    fontSize: '16px',
    padding: '12px 24px',
    cursor: 'pointer',
    borderRadius: '5px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    transition: '0.3s',
  },
}))

const CustomCard = ({ image, name, description, ...otherProps }: CustomCardProps) => {
  return (
    <CardContainer>
      <CardMediaContainer>
        <Image src={image} alt={name} width={500} height={100} />
      </CardMediaContainer>
      <CardContentContainer>
        <CardMediaTop>
          <Typography variant='h6' component='h6'>
            {name}
          </Typography>
          <Typography variant='body1' component='div'>
            {otherProps?.duration ? <div className='duration'>
              <AccessTimeSharpIcon fontSize='small' />
              {otherProps?.duration}

            </div> : otherProps?.role[0].toLocaleUpperCase() + otherProps?.role.slice(1)}
          </Typography>
        </CardMediaTop>
        <Typography variant={otherProps?.duration ? 'h6' : 'body1'} color='text.dark' component='div'
          style={{ textAlign: otherProps?.role ? 'justify' : 'left' }}
        >
          {description.slice(0, 80)}...
        </Typography>
      </CardContentContainer>
      <OverlayDiv className='overlay'>
        <CustomButton onClick={otherProps?.onClick} variant='outlined' color='secondary'>
          {otherProps?.overlayText}
        </CustomButton>
      </OverlayDiv>
    </CardContainer >
  )
}

export default CustomCard