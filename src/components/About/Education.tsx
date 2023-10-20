import React from 'react'
import { Timeline } from '@/components'
import styled from '@mui/material/styles/styled';
import { educationItems as items } from '@/utils'

const StyledEducationTimeline = styled('div')(({ theme }) => ({
  margin: '50px auto',
  width: '50%',
  h2: {
    fontSize: '0.85rem',
  },

  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}));


const Education = () => {
  return (
    <StyledEducationTimeline data-aos="zoom-in-up">
      <Timeline
        items={items}
        mode='VERTICAL'
      />
    </StyledEducationTimeline>
  )
}

export default Education