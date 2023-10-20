"use client";

import React, { useContext } from 'react'
import Image from 'next/image'
import { ThemeContext } from '@/config/ThemeContext';

export default function ThemeToggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div className='w-10 h-5 rounded-[50px] cursor-pointer flex items-center justify-between relative' onClick={toggleTheme}
      style={theme === "dark"
        ? { background: "white" }
        : { background: '#0f172a' }
      }
    >
      <Image src='/moon.png' alt='moon' width={14} height={14} />
      <div className='w-4 h-4 rounded-full absolute'
        style={theme === "dark"
          ? { left: 1, background: "#0f172a" }
          : { right: 1, background: 'white' }
        }
      />
      <Image src='/sun.png' alt='sun' width={14} height={14} />
    </div>
  )
}
