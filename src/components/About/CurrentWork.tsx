import React from 'react'
import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

interface CurrentWorkProps {
  appImage: any
  appTitle: string
  appDescription: string
  appLink?: string
  role: string
  year: string
}

const CurrentWorkItem = styled('div')(({ theme }) => ({
  width: '90%',
  backgroundColor: theme.white.main,
  margin: '1rem auto',
  borderRadius: '10px',
  boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
  padding: '30px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '2rem',

  img: {
    borderRadius: '10px',
  },

  button: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.white.main,
    fontSize: '17px',
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.5s ease-in-out',

    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
    },
  },

  '.card': {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },

  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: '1rem',
    padding: '10px',
    width: '95%',
    margin: '1rem auto',

    '.card': {
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center',

      img: {
        width: '100%',
        height: '100%',
      },
    },

    // button: {
    //   alignSelf: 'flex-start',
    // },
  },

}))

const CurrentWork: React.FC<CurrentWorkProps> = ({ appImage, role, appTitle, appDescription, year }) => {
  return (
    <>
      <CurrentWorkItem data-aos="fade-up">
        <div className='card'>
          <Image src={appImage} alt='Ola' width={200} height={150} />
          <div>
            <Typography variant='body1'>{year}</Typography>
            <Typography variant='h4'>{appTitle}</Typography>
            <Typography variant='h5'>{role}</Typography>
            <Typography variant='body1'>
              {appDescription}
            </Typography>
          </div>
        </div>
        <button>
          Contact Me
        </button>
      </CurrentWorkItem>
    </>
  )
}

export default CurrentWork