import React from 'react'
import Image from 'next/image'
import { styled } from '@mui/material'
import { socialLinks } from '@/utils'
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link'

const AboutImageContainer = styled('div')(({ theme }) => ({
  width: '300px !important',
  boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
  borderRadius: '200px 200px 0px 0px',
  img: {
    with: '100%',
    objectFit: 'fill',
    borderRadius: '200px 200px 0px 0px',
    transition: 'all 0.5s ease-in-out',
    zIndex: 1,
  },

  [theme.breakpoints.down('sm')]: {
    width: '10%',
    border: '1px solid red',
    // height: '400px',
    // borderRadius: '200px 200px 0px 0px',
    img: {
      with: '100%',
      objectFit: 'fill',
      // borderRadius: '50%',
      transition: 'all 0.5s ease-in-out',
      zIndex: 1,
    },
  },
}))

const SocialMedia = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-around',
  width: 300,
  marging: '0 auto',
  padding: '16px',
  '& svg': {
    fontSize: '1.5rem',
    color: theme.text.dark,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      color: theme.palette.secondary.dark,
      borderRadius: '50%',
      transform: 'scale(1.2)',
    }
  },
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


interface Props {
  photo: string;
}
const AboutImage: React.FC<Props> = (props) => {
  const { photo } = props
  return (
    <AboutImageContainer>
      <Image src={photo} alt='Ola' width={300} height={400} />
      <SocialMedia>
        {socialLinks.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            target='_blank'
            rel='noopener noreferrer'
          >
            <IconButton
              aria-label={link.title}
            >
              <link.icon />
            </IconButton>
          </Link>
        ))}
      </SocialMedia>
    </AboutImageContainer>
  )
}

export default AboutImage