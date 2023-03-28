import React from 'react'
import { CustomButton, CustomModal } from '..'
import { styled, Grid, Typography } from '@mui/material'
import ModalImg from '../../assets/images/modalpic.jpeg'
import Image from 'next/image'

interface ProjectModalProps {
  open: boolean
  handleClose: () => void
}

const ProjsctContent = styled(Grid)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
  backgroundColor: `linear-gradient(145deg, #e2e8ec, #ffffff)`,
  padding: 10,
  [theme.breakpoints.down('sm')]: {
    // padding: '16px',
    gridTemplateColumns: 'repeat(1, 1fr)',
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

}))

const ProjectImage = styled('div')(({ theme }) => ({
  img: {
    width: 545,
    height: 408,
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

const ProjectDetails = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  // gap: '15px',
  padding: '10px',

  h4: {
    fontSize: '35px',
    fontWeight: 600,
    marginBottom: '18px',
  },
  button: {
    '&:hover': {
      transition: '0.4s',
      transform: 'scale(1.04)',
      zIndex: 1,
      boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
    },
  },

  p: {
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: 400,
    marginBottom: '18px',
  },

  div: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
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

const ProjectModal = ({ open, handleClose }: ProjectModalProps) => {
  return (

    <CustomModal
      open={open}
      handleClose={handleClose}
      width='1230px'
      height='518px'
    >
      <ProjsctContent>
        <ProjectImage>
          <Image src={ModalImg} alt='modal' />
        </ProjectImage>
        <ProjectDetails>
          <Typography variant='h6'>Frontend</Typography>
          <Typography variant='h4'>Coral Task Manager</Typography>
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.
          </Typography>

          <Typography variant='body1'>
            Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!
          </Typography>

          <Typography variant='body1'>
            Tech Stacks: React, Redux, Material UI, Next JS, TypeScript, Firebase
          </Typography>
          <div>
            <CustomButton
              variant='contained'
              color='primary'
              width='130px'
              onClick={() => { }}
            >
              Live Demo
            </CustomButton>

            <CustomButton
              variant='outlined'
              color='primary'
              width='150px'
              onClick={() => { }}
            >
              Source Code
            </CustomButton>
          </div>
        </ProjectDetails>
      </ProjsctContent>
    </CustomModal>
  )
}

export default ProjectModal