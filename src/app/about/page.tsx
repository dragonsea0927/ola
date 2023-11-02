import React from 'react'
import { AboutPage } from '@/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Oladipupo Ishola',
  description: 'About Oladipupo Ishola',
}

const getAbout = async () => {
  const res = await fetch(`${process.env.API_URL}/about`)

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