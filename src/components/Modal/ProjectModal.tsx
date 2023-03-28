import React from 'react'
import { CustomModal } from '..'

interface ProjectModalProps {
  open: boolean
  handleClose: () => void
}

const ProjectModal = ({ open, handleClose }: ProjectModalProps) => {
  return (

    <CustomModal
      open={open}
      handleClose={handleClose}
      width='1230px'
      height='518px'
    >
      <h1>Project Modal</h1>
    </CustomModal>
  )
}

export default ProjectModal