import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
      <div>
        <Typography sx={{ color: 'error', fontSize: '30px' }}>Something great is coming</Typography>
      </div>
    </>
  )
}
