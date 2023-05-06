import React from 'react'
import { Timeline } from '@/components'
import { styled } from '@mui/material/styles'
import { workExpItems as items } from '@/utils'

const StyledTimeline = styled('div')(({ theme }) => ({
  h2: {
    fontSize: '0.85rem',
  },
  margin: '50px auto',
  width: '90%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))

const WorkExperience = () => {
  return (
    <StyledTimeline>
      <Timeline
        items={items}
        mode='VERTICAL_ALTERNATING'
      />
    </StyledTimeline>
  )
}

export default WorkExperience