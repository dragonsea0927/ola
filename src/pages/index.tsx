import Head from 'next/head'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import { CustomButton, Layout } from '../components'

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
        <Typography variant='h1'>Test run</Typography>
        <CustomButton
          variant='contained'
          color='secondary'
          size='large'
        >Click me</CustomButton>
      </Layout>
    </>
  )
}
