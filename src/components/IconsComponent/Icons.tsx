import React from 'react'
import { IconButton } from '@mui/material'

interface IconProps {
  link: {
    id: number
    title: string
    path: string
    icon?: any
  }
}

const CustomIcon = ({ icon: IconComponent }: { icon: React.ElementType }) => {
  return <IconComponent sx={{ fontSize: '1.1rem', color: 'white' }} style={{ color: 'white', fontSize: '1.1rem', }} />;
};

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