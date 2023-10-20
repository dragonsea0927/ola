'use client'

import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';



export default function AnimationProvider({ children }: { children: React.ReactNode }) {

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

  React.useEffect(() => {
    AOS.init({
      // once: true,
      delay: 50,
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  React.useEffect(() => {
    AOS.refresh()
  }, [])
  return (
    <AnimatePresence
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <motion.div initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={variantProps}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
