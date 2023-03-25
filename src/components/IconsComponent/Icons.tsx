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
    <div>
      <IconButton
        key={link.id}
      >
        <CustomIcon icon={IconComponent} />
      </IconButton>
    </div>
  )
}

export default Icons