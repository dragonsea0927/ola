import React from 'react'
import { styled } from '@mui/material'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';

const CustomModalContainer = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    padding: '5px',
  },

  [theme.breakpoints.up('md')]: {
  },

  [theme.breakpoints.up('lg')]: {

  },

}))

interface ModalChildrenProps {
  width?: string
  height?: string
  theme?: any
}

const ModalChildrenContainer = styled(Box)(({ theme, width, height }: ModalChildrenProps) => ({
  width: width,
  height: height,
  backgroundColor: '#ECF0F3',
  borderRadius: '10px',
  padding: 45,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',

  span: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    width: '24px',
    height: '24px',
    border: 'none',
    backgroundColor: 'transparent',
    color: '#FF024F',
    cursor: 'pointer',
    borderRadius: '50%',
    fontSize: '1.2rem',
    lineHeight: '1rem',
    boxShadow: 'rgb(209, 217, 230) 5px 5px 15px 0px, rgb(255, 255, 255) -5px -5px 15px 0px',
    padding: '20px',
    zIndex: 1,
    position: 'absolute',
    top: '20px',
    right: '20px',

    '&:hover': {
      backgroundColor: '#FF024F',
      color: '#fff',
    }
  },
  [theme.breakpoints.down('sm')]: {
    width: width,
    height: height,
    padding: '30px 10px 10px 10px',

    span: {
      width: '20px',
      height: '20px',
      fontSize: '1.2rem',
      color: '#fff',
      position: 'fixed',
      top: '12px',
      right: '8px',
      zIndex: 1000,
      boxShadow: 'none',
    },
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

}))
interface CustomModalProps {
  open: boolean
  handleClose: () => void
  children: React.ReactNode
  width?: string
  height?: string
}

const CustomModal = ({ open, handleClose, children, ...props }: CustomModalProps) => {
  return (
    <CustomModalContainer
      open={open}
      onClose={handleClose}
      closeAfterTransition
    >
      <Fade in={open}>
        <ModalChildrenContainer
          width={props.width}
          height={props.height}
        >
          <span
            onClick={handleClose}
          >
            X
          </span>
          {children}
        </ModalChildrenContainer>
      </Fade>
    </CustomModalContainer>
  )
}

export default CustomModal