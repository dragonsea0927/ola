import React from 'react'
import CustomIcon from './CustomIcon'
import Link from 'next/link'

interface IconProps {
  link: {
    id: number
    title: string
    path: string
    icon?: any
  }
}

const Icons = ({ link }: IconProps) => {
  const { icon: IconComponent } = link;
  return (
    <>
      <Link href={link.path} passHref className='flex items-center justify-center text-base md:text-xl w-7 h-7 rounded-full hover:bg-[var(--primary)] hover:text-[var(--ctaText)] cursor-pointer transition-all duration-300 ease-in-out bg-[var(--ctaText)]'>
        <CustomIcon icon={IconComponent} />
      </Link>
    </>
  )
}

export default Icons