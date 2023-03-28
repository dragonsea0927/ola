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
    padding: '16px',
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

}))

interface ModalChildrenProps {
  width?: string
  height?: string
  theme?: any
}

const ModalChildrenContainer = styled(Box)(({ theme, width, height }: ModalChildrenProps) => ({
  width: width || '500px',
  height: height || '500px',
  backgroundColor: '#ECF0F3',
  borderRadius: '10px',
  padding: 30,
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',

  button: {
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
    '&:hover': {
      backgroundColor: '#FF024F',
      color: '#fff',
    }
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

const ModalContent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  backgroundColor: `linear-gradient(145deg, #e2e8ec, #ffffff)`,
  padding: 5,
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
          <button>
            X
          </button>
          <ModalContent>
            {children}
          </ModalContent>
        </ModalChildrenContainer>
      </Fade>
    </CustomModalContainer>
  )
}

export default CustomModal