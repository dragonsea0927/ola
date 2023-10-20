import React from 'react'
import { TabPanelProps } from '@/types'

const TabPanel = ({ children, value, index, ...others }: TabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...others}
      data-aos="fade-up"
    >
      {children}
    </div>
  )
}

export default TabPanel