import React from 'react'
import { Timeline } from '@/components'
import { styled } from '@mui/material/styles';
import { educationItems as items } from '@/utils'

const StyledTimeline = styled('div')(({ theme }) => ({
  margin: '50px auto',
  width: '50%',
  h2: {
    fontSize: '0.85rem',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
    border: '1px solid red',
    // margin: '50px auto',
  },
}));


const Education = () => {
  return (
    <StyledTimeline>
      <Timeline
        items={items}
        mode="VERTICAL_ALTERNATING"
      />
    </StyledTimeline>
  )
}

export default Education