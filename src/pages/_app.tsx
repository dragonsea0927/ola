import React from 'react'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { theme, createEmotionCache } from '@/config'
import '../styles/globals.scss'
import '@/styles/about.css';
import { SessionProvider } from 'next-auth/react'
import { motion, AnimatePresence } from 'framer-motion';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function App(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps: { session, ...pageProps }, router } = props;

  const variantProps = {
    pageInitial: {
      opacity: 0
    },
    pageAnimate: {
      opacity: 1
    },
    pageExit: {
      backgroundColor: 'white',
      filter: `invert()`,
      opacity: 0
    }
  }
  return (
    <AnimatePresence>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={variantProps}>
    <SessionProvider session={session}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div id="particle-container">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <Component {...pageProps} />
          </div>
        </ThemeProvider>
      </CacheProvider>
    </SessionProvider>
    </motion.div>
    </AnimatePresence>
  );
}
