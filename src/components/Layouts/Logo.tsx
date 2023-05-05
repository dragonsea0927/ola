import React from 'react'
import { styled } from '@mui/material/styles'
import BrandLogo from '@/assets/images/brandlogo.jpeg'
import Image from 'next/image'

const LogoContainer = styled('div')(({ theme }) => ({

  img: {
    width: 50,
    height: 50,
    objectFit: 'cover',
    objectPosition: 'center',
  }
}))

const Logo = () => {
  return (
    <LogoContainer>
      <Image
        src={BrandLogo}
        alt="Brand Logo"
        width={50}
        height={50}
      />
    </LogoContainer>
  )
}

export default Logo