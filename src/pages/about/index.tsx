import React from 'react'
import { AboutPage } from '@/components'
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import prisma from '@/lib/prisma';

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req })

  if (!session) {
    res.statusCode = 403
    return {
      props: { about: [] }
    }
  }

  const about = await prisma.about.findMany()
  //   // where: {
  //   //   author: {
  //   //     email: session?.user?.email
  //   //   },
  //   // },
  //   // include: {
  //   //   author: {
  //   //     select: {
  //   //       name: true,
  //   //     }
  //   //   }
  //   // }
  // })

  return {
    props: { about: JSON.parse(JSON.stringify(about)) }
  }
}

const AboutHomePage = (props) => {
  const { about } = props
  return (
    <>
      <AboutPage data={about} />
    </>
  )
}

export default AboutHomePage