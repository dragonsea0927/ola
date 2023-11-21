"use client";

import React, { createContext, useEffect, useState } from 'react'

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
