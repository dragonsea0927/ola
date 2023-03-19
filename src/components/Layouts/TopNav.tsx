import React from 'react'
import { styled } from '@mui/material';
import Link from 'next/link'

const TopNavContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: theme.spacing(2, 3),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.light,
  fontWeight: 400,
  fontSize: '1.1rem',
  letterSpacing: '0.1rem',
  '& a': {
    color: theme.palette.secondary.light,
    textDecoration: 'none',
    '&:hover': {
      color: theme.text.primary,
      textDecoration: 'none',
    },
  },
}));

const NavigationsTab = styled('div')(({ theme }) => ({
  width: '30%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& a': {
    color: theme.palette.secondary.light,
    textDecoration: 'none',
    '&:hover': {
      color: theme.text.primary,
      textDecoration: 'none',
    },
  },
}));

const TopNav = () => {
  return (
    <TopNavContainer>
      Oish
      <NavigationsTab>
        <Link href='/'>Projects</Link>
        <Link href='/about'>About</Link>
        <Link href='/blog'>Blogs</Link>
        <Link href='/contact'>Contact</Link>
      </NavigationsTab>
    </TopNavContainer>
  )
}

export default TopNav