import Head from 'next/head'
import { Typography } from '@mui/material'
import { CustomButton, Hero, Layout } from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ola Ishola</title>
        <meta name="description" content="Personal website built with NextJS, MongoDB and Material UI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Layout>
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </Layout>
    </>
  )
}
