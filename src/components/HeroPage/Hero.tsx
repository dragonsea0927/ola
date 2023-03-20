import React from 'react'
import { styled } from '@mui/material'
import Grid from '@mui/material/Grid'

const GridContainer = styled(Grid)(({ theme }) => ({
  width: '80%',
  margin: '100px auto',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    margim: '0px',
  },

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },

  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },

})

)

const GridItemOne = styled(Grid)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },

  [theme.breakpoints.up('md')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },

  [theme.breakpoints.up('lg')]: {
    display: { xs: 'none', sm: 'none', md: 'block' },
  },
  border: '1px solid blue',
}))

const GridItemTwo = styled(Grid)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },

  [theme.breakpoints.up('md')]: {
    display: 'block',
  },

  [theme.breakpoints.up('lg')]: {
    display: 'block',
  },
  border: '1px solid green',
}))


const Hero = () => {
  return (
    <GridContainer container spacing={2}>
      <GridItemOne item xs={12} sm={12} md={6}>
        <h1>Hero</h1>
        <p>Hero content</p>
      </GridItemOne>

      <GridItemTwo item xs={false} sm={false} md={6}>
        <h1>Hero</h1>
        <p>Hero content</p>
      </GridItemTwo>
    </GridContainer>
  )
}

export default Hero