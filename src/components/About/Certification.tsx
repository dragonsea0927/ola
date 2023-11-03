import React from 'react'
import Link from 'next/link'

const Certification = () => {
  return (
    <div className='cert w-full lg:w-[90%] flex flex-col items-center justify-center my-12 mx-auto' data-aos="zoom-in-up">
      <h3 className='text-center text-2xl md:text-3xl'>Certification & Trainings</h3>
      <p className='text-base text-center mb-4 md:mb-8'>Here are some of the certifications and trainings I have completed.</p>
      <ul className='w-full mx-auto p-4 grid gap-3 md:gap-4 md:p-8 lg:w-[70%] bg-[var(--contactBg)]'>
        <li className='text-base md:text-lg rounded-md transition-all duration-300 ease-in-out cursor-pointer'>
          Remote Full Stack Web Development Course - <Link className='text-[var(--primary)]' href="https://www.credential.net/535b9041-ea31-4b61-aa42-960bebc001f6#gs.wdx1dk" target="_blank" rel="noopener noreferrer">Certificate</Link>
        </li>
        <li className='text-base md:text-lg rounded-md transition-all duration-300 ease-in-out cursor-pointer'>
          Google Africa Developer Training Program on Google Cloud Platform - <Link className='text-[var(--primary)]' href="https://adscerts.com/scholar/8FE477CD48800ECF" target="_blank" rel="noopener noreferrer">Certificate</Link>
        </li>
      </ul>
    </div>
  )
}

export default Certification