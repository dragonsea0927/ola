import React from 'react'
import { Box } from '@mui/material'
import { TabPanelProps } from '@/types'

const TabPanel = ({ children, value, index, ...others }: TabPanelProps) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...others}
      data-aos="fade-up"
    >
      {children}
    </Box>
  )
}

export default TabPanel