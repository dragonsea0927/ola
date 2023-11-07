import React from 'react'
import { TfiEye } from 'react-icons/tfi'
import { BsGithub } from 'react-icons/bs'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import LoginButton from '@/components/auths/LoginButton'

// const handleLogin = async () => {
//   const res = await 
// }


export default function RegisterPage() {
  return (
    <main className='w-full h-full overflow-hidden'>
      <div className='my-5 bg-white mx-auto h-full w-full py-10 px-2 gap-8 flex flex-col items-center md:my-20 md:w-1/2  rounded-lg md:gap-3 md:py-4'>
        <div className='flex flex-col gap-2 items-center md:gap-3'>
          <h1 className='text-2xl font-bold md:text-3xl text-[var(--textColor)] text-center'>Welcome!</h1>
          <p className='text-[var(--textColor)] text-center'>Create account</p>
        </div>
        <form className='flex flex-col gap-2 w-7/12'>
          <label htmlFor="name" className='flex flex-col gap-1'>
            Your Name
            <input
              type="text"
              name='text'
              placeholder='John Doe'
              className='border border-gray-200 rounded p-2 focus:outline-none focus:border-black md:p-3'
            />
          </label>
          <label htmlFor="email" className='flex flex-col gap-1'>
            Your Email
            <input
              type="email"
              name='email'
              placeholder='example@gmail.com'
              className='border border-gray-200 rounded p-2 focus:outline-none focus:border-black md:p-3'
            />
          </label>
          <label htmlFor="password" className='flex flex-col gap-1 relative'>
            Password
            <input
              type="password"
              name='password'
              placeholder='********'
              className='border border-gray-200 rounded p-2 focus:outline-none focus:border-black md:p-3'
            />
            <TfiEye className='absolute top-10 right-2 text-gray-400' />
          </label>

          <label htmlFor="confirmPassword" className='flex flex-col gap-1 relative'>
            Confirm Password
            <input
              type="confirmPassword"
              name='confirmPassword'
              placeholder='********'
              className='border border-gray-200 rounded p-2 focus:outline-none focus:border-black md:p-3'
            />
            <TfiEye className='absolute top-10 right-2 text-gray-400' />
          </label>
          <button type="submit" className='bg-blue-600 text-white rounded py-3 md:font-semibold'>Register</button>
        </form>
        <div className='flex gap-4 items-center w-11/12 my-1 mx-auto md:w-11/12 md:justify-center md:text-center md:items-center'>
          <hr className='w-34 text-[#D6DDEC] md:w-36' />
          <span className='md:text-lg'>or</span>
          <hr className='w-34 text-[#D6DDEC] md:w-36' />
        </div>
        <LoginButton />
        <div>
          <p className='text-sm text-center md:text-base'>Have account? <Link href="/auths/signin" className='text-blue-400'>Sign In</Link></p>
        </div>
      </div>
    </main>
  )
}
