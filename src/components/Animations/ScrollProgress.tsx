'use client';

import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";

interface ScrollProgressProps {
  className?: string
}

const ScrollProgress = ({ className }: ScrollProgressProps) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div className={className} style={{ scaleX }} />
  )
}

export default ScrollProgress