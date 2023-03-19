import Head from 'next/head'
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
          width='200px'
        >Click me</CustomButton>

        <CustomButton
          variant='outlined'
          color='secondary'
          width='160px'
        >Outlined</CustomButton>

        <CustomButton
          variant='text'
          color='secondary'
          width='160px'
        >Outlined</CustomButton>
      </Layout>
    </>
  )
}
