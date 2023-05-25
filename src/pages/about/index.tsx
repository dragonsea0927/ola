import React from 'react'
import { AboutPage } from '@/components'
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import prisma from '@/lib/prisma';
import { About } from '@/types';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {

  const about = await prisma.about.findMany()
  return {
    props: { about: JSON.parse(JSON.stringify(about)) }
  }
}

interface AboutHomePageProps {
  about: About[]
}

const AboutHomePage: React.FC<AboutHomePageProps> = (props) => {
  const { about } = props
  return (
    <div data-aos="fade-up">
      <AboutPage data={about} />
    </div>
  )
}

export default AboutHomePage