import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { Layout } from '@/components'
import { styled } from '@mui/material'
import Typography from '@mui/material/Typography';

const ComponentStyles = styled('div')(({ theme }) => ({
  padding: theme.spacing(2, 3),
  margin: '100px auto',
  backgroundColor: theme.white.main,
  borderRadius: '5px',
  letterSpacing: '0.1rem',
  '.link': {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'underline',
    },
  },
}));


export default function AccessDenied() {
  return (
    <>
      <Layout>
        <ComponentStyles>
          <Typography variant='h1'>Access Denied</Typography>
          <Typography variant='body1'>
            You must be
            <Link
              className='link'
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault()
                signIn()
              }}> signed in </Link>
            to view this page
          </Typography>
        </ComponentStyles>
      </Layout>
    </>
  )
}