import React from 'react'
import { styled } from '@mui/material/styles'
import BrandLogo from '@/assets/images/Logo-no-bg.png'
import Image from 'next/image'
import Link from 'next/link'

const LogoContainer = styled(Link)(({ theme }) => ({

  img: {
    width: 70,
    height: 70,
    objectFit: 'contain',
    cursor: 'pointer',
  },
}))

const Logo = () => {
  return (
    <LogoContainer href='/'>
      <Image
        src={BrandLogo}
        alt="Brand Logo"
        width={50}
        height={50}
        className='logo'
      />
    </LogoContainer>
  )
}

export default Logo