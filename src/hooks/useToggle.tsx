'use client';

import React from 'react'

const useToggle = (initialState: boolean) => {
  const [isOpen, setIsOpen] = React.useState(initialState)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  return { isOpen, toggleOpen }
}

export default useToggle