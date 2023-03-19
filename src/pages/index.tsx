import Head from 'next/head'
import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material'

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
      <Box>
        <Typography variant='h2'>Test run</Typography>
        <Button variant='contained' color='primary'>Test</Button>
      </Box>
    </>
  )
}
