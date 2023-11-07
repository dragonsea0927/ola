import React from 'react'
import { MdEmail } from 'react-icons/md'
import { HiLockClosed } from 'react-icons/hi'
import Link from 'next/link'
import LoginButton from '@/components/auths/LoginButton'

export default function LoginPage() {
  return (
    <main className='w-full h-full overflow-hidden'>
      <div>
        <section className='bg-[#F2F6FF] my-16 mx-auto h-full w-full py-10 px-2 gap-8 flex flex-col items-center md:my-15 md:h-4/5 rounded-lg md:gap-10 md:py-20'>
          <h1 className='text-2xl font-bold text-blue-500 md:text-4xl'>OlaDev</h1>
          <div className='w-full bg-white px-2 py-5 rounded-sm md:w-[450px] md:px-5 md:py-7 md:rounded-md'>
            <h2 className='text-center text-lg text-[#36537F] font-semibold mb-1 md:text-2xl'>Welcome Back</h2>
            <p className='text-xs text-center text-gray-500 mb-6 md:text-sm'>Enter your credentials to access your account</p>
            <form className='w-full flex flex-col gap-5'>
              <div className='w-full flex relative border border-gray-200 rounded-sm'>
                <MdEmail className='absolute text-blue-400 top-4 left-1' />
                <input type="email" placeholder="Email" className='w-full py-3 pl-7 rounded-sm' />
              </div>
              <div className='w-full flex relative border border-gray-200 rounded-sm'>
                <HiLockClosed className='absolute text-blue-400 top-4 left-1' />
                <input type="password" placeholder="Password" className='w-full py-3 pl-7 rounded-sm' />
              </div>
              <button type="submit"
                className='w-44 p-3 mx-auto rounded-md bg-blue-500 
              text-white hover:text-blue-400 hover:bg-white hover:border 
              hover:border-blue-500 mt-2 md:w-11/12'
              >Sign In</button>
            </form>
          </div>
          <div className='w-full flex flex-col items-center justify-center gap-2'>
            <div className='flex gap-4 items-center w-11/12 my-1 mx-auto md:w-11/12 md:justify-center md:text-center md:items-center'>
              <hr className='w-34 text-[#D6DDEC] md:w-36' />
              <span className='md:text-lg'>or</span>
              <hr className='w-34 text-[#D6DDEC] md:w-36' />
            </div>
            <LoginButton />
            <p className='text-center text-gray-500 text-sm md:text-base'>Don't have an account? <Link href="/auths/register" className='text-blue-500 pl-2'>Sign Up</Link></p>
          </div>
        </section>
      </div>
    </main>
  )
}
