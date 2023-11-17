import { signIn } from 'next-auth/react'
import Link from 'next/link'

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