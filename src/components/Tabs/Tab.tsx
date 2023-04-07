import React from 'react'
import { styled, Box } from '@mui/material'

interface TabPanelProps {
  children?: any
  index: number
  value: number
}



const TabPanel = ({ children, value, index, ...others }: TabPanelProps) => {
  return (
    <Box
      sx={{ p: 3, border: 1, borderColor: 'divider', borderRadius: 1 }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...others}
    >
      {children}
    </Box>
  )
}

export default TabPanel