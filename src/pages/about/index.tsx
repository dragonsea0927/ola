import React from 'react'
import { AboutPage, Layout } from '@/components'
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
    <Layout>
      <div data-aos="fade-up">
        <AboutPage data={about} />
      </div>
    </Layout>
  )
}

export default AboutHomePage