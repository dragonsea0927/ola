import React from 'react'
import { AboutPage, Layout } from '@/components'
import { About } from '@/types';

const getAbout = async () => {
  const res = await fetch('http://localhost:8000/api/v1/about')

  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return res.json()
}


const AboutHomePage = async () => {
  const about = await getAbout()
  return (
    <div data-aos="fade-up">
      <AboutPage data={about} />
    </div>
  )
}

export default AboutHomePage