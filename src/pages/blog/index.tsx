import React from 'react'
import { Layout } from '@/components'
import { styled } from '@mui/material'

const StyledBlogContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  padding: '10px',

  h1: {
    fontSize: '8rem',
    fontWeight: 700,
    color: theme.text.dark,
  },
}));

const Blog = () => {
  return (
    <Layout>
      <StyledBlogContainer>
        <h1>Coming Soon.</h1>
      </StyledBlogContainer>
    </Layout>
  )
}

export default Blog