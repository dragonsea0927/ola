import React from 'react'
import Link from 'next/link'
import { AdminRoutesProps } from '@/types'
import { useNavigation } from '@/hooks';
import { styled } from '@mui/material'

const StyledLink = styled(Link)(({ theme }) => ({
  padding: theme.spacing(1, 1),
  color: theme.text.primary + ' !important',
  textDecoration: 'none',
  fontSize: '1rem',
  '&:hover': {
    color: theme.palette.secondary.main + ' !important',
    textDecoration: 'underline',
  },
  '&[data-active="true"]': {
    color: theme.palette.secondary.main,
    textDecoration: 'underline',
  },
}))


const AdminRoutes = ({ session, isActive, signOut }: AdminRoutesProps) => {
  const { navigate } = useNavigation();
  return (
    <>
      <small>
        Welcome, {session?.user?.name} ({session?.user?.email})
      </small>
      <StyledLink href="/" data-active={isActive('/')}>
        Home
      </StyledLink>

      <StyledLink href="/create" data-active={isActive('/create')}>
        New Project
      </StyledLink>

      <StyledLink href="/projects" data-active={isActive('/projects')}>
        Projects
      </StyledLink>

      <StyledLink href="/"
        onClick={(e) => {
          e.preventDefault();
          signOut();
          navigate('/');
        }}
      >
        Sign Out
      </StyledLink>
    </>
  )
}

export default AdminRoutes