'use client';

import { ThemeContext } from '@/config/ThemeContext'
import React, { useContext, useEffect, useState } from 'react'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useContext(ThemeContext)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    return (
      <div className={theme}>{children}</div>
    )
  } else {
    return null
  }
}