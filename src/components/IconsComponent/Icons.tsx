import React from 'react'
import { IconButton } from '@mui/material'
import CustomIcon from './CustomIcon'
import { useNavigation } from '@/hooks'

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
  const { navigate } = useNavigation()
  return (
    <>
      <IconButton
        key={link.id}
        onClick={() => navigate(link.path)}
        sx={{ color: { md: 'white' }, fontSize: '1.1rem', padding: '5px', }}
      >
        <CustomIcon icon={IconComponent} />
      </IconButton>
    </>
  )
}

export default Icons