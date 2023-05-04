import React from 'react'
import { AboutPage } from '@/components'
import { getSession, useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import prisma from '@/lib/prisma';
import { About } from '@/types';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req })

  if (!session) {
    res.statusCode = 403
    return {
      props: { about: [] }
    }
  }

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
  const { data: session } = useSession()

  console.log(session)
  return (
    <>
      <AboutPage data={about} />
    </>
  )
}

export default AboutHomePage