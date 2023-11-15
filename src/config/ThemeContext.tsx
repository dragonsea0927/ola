"use client";

import React, { createContext, useEffect, useState } from 'react'

// const themes = {
//   white: {
//     main: '#ffffff',
//   },

//   text: {
//     primary: '#404756',
//     dark: '#23272f',
//   },

//   palette: {
//     primary: {
//       main: '#ebecf0',
//       light: '#f6f7f9',
//       dark: '#ebecef',
//     },
//     secondary: {
//       main: '#087ea4',
//       light: '#149eca',
//     },
//     error: {
//       main: 'crimson',
//     },
//   },

//   typography: {
//     fontFamily: ['"Roboto"', '"Helvetica"', '"Arial"', 'sans-serif'].join(','),

//     h1: {
//       fontSize: '55px',
//       fontWeight: 700,
//       lineHeight: 1.2,
//       letterSpacing: '-0.01562em',
//       color: '#23272f',
//       fontStyle: 'normal',
//     },

//     h2: {
//       fontSize: '52px',
//       fontWeight: 700,
//       lineHeight: 1.5,
//       letterSpacing: '-0.01562em',
//       color: '#23272f',
//       fontStyle: 'normal',
//     },

//     h3: {
//       fontSize: '13px',
//       fontWeight: 700,
//       lineHeight: 1.5,
//       letterSpacing: '0.025em',
//       color: '#5e687e',
//       fontStyle: 'normal',
//     },

//     h4: {
//       fontSize: '32px',
//       fontWeight: 700,
//       lineHeight: 1.5,
//       letterSpacing: '0.025em',
//       color: '#23272f',
//       fontStyle: 'normal',
//     },

//     body1: {
//       fontSize: '17px',
//       fontWeight: 400,
//       lineHeight: 1.2,
//       letterSpacing: '0.025em',
//       color: '#404756',
//       fontStyle: 'normal',
//     },

//     body2: {
//       fontSize: '17px',
//       fontWeight: 400,
//       lineHeight: 1.2,
//       letterSpacing: '0.025em',
//       color: '#404756',
//       fontStyle: 'normal',
//     },

//     button: {
//       fontSize: "17px",
//       fontWeight: 400,
//       lineHeight: 1.2,
//       letterSpacing: "0.02857em",
//       textTransform: "capitalize",
//     },

//   },
//   dark: {
//     main: '#23272f',
//     light: '#404756',
//     dark: '#1c1f25',
//   },

//   light: {
//     main: '#ffffff',
//     light: '#f6f7f9',
//     dark: '#ebecef',
//   },
// }

export const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => { }
})

const getFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    const value = localStorage.getItem("themeMode");
    return value || "light";
  }
}

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [themeMode, setTheme] = useState(() => {
    return getFromLocalStorage() || "light";
  })

  const toggleTheme = () => {
    setTheme(themeMode === "light" ? "dark" : "light")
  }

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode])

  return (
    <ThemeContext.Provider value={{ theme: themeMode, toggleTheme }}>{children}
    </ThemeContext.Provider>
  )
}
