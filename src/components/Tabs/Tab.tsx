import React from 'react'
import { styled } from '@mui/material'

interface TabPanelProps {
  children?: any
  index: number
  value: number
}



const TabPanel = ({ children, value, index, ...others }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...others}
    >
      {children}
    </div>
  )
}

export default TabPanel