import React from 'react'
import BrandLogo from '@/assets/images/Logo-no-bg.png'
import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src={BrandLogo}
        alt="Brand Logo"
        width={50}
        height={50}
        className=''
      />
    </Link>
  )
}

export default Logo