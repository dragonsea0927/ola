import React from 'react'
import ThemeProvider from './ThemeProvider'
// import ThemeContextProvider from '@/config/ThemeContext'

type AppThemeProviderProps = {
  children: React.ReactNode
}

export default function AppThemeProvider({ children }: AppThemeProviderProps) {
  return (
    // <ThemeContextProvider>
    <ThemeProvider>
      {children}
    </ThemeProvider>
    // </ThemeContextProvider>
  )
}
