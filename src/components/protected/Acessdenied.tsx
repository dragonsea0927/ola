import { signIn } from 'next-auth/react'
import Link from 'next/link'

// const ComponentStyles = styled('div')(({ theme }) => ({
//   padding: theme.spacing(2, 3),
//   margin: '100px auto',
//   backgroundColor: theme.white.main,
//   borderRadius: '5px',
//   letterSpacing: '0.1rem',
//   '.link': {
//     color: theme.palette.secondary.main,
//     textDecoration: 'none',
//     '&:hover': {
//       color: theme.palette.secondary.main,
//       textDecoration: 'underline',
//     },
//   },
// }));


export default function AccessDenied() {
  return (
    <main>
      <h1>Access Denied</h1>
      <div>
        You must be
        <Link
          className='link'
          href="/api/auth/signin"
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}> signed in </Link>
        to view this page
      </div>
    </main>
  )
}