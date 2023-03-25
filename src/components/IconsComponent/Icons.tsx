import React from 'react'
import { IconButton } from '@mui/material'
import CustomIcon from './CustomIcon'

interface IconProps {
  link: {
    id: number
    title: string
    path: string
    icon?: any
  }
}

const Icons = ({ link }: IconProps) => {
  const { icon: IconComponent } = link;
  return (
    <>
      <IconButton
        key={link.id}
      >
        <CustomIcon icon={IconComponent} />
      </IconButton>
    </>
  )
}

export default Icons