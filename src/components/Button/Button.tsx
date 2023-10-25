'use client'

import { ButtonProps } from "@/types";


export default function CustomButton(props: ButtonProps) {
  const { variant, color, size, width, children, onClick } = props;
  const tailwindClasses = `
  w-${variant === 'text' ? ['50%'] : [width]}
  h-[45px]
  px-3 py-5
  rounded-full
  leading-4
  tracking-tighter
  shadow-lg
  flex
  items-center
  justify-center
  gap-10
  text-base
  md:text-lg
  text-[var(--ctaText)]
  ${variant === 'contained' ? `bg-[var(--cta)]` : 'bg-transparent'}
  ${variant === 'outlined' ? `border border-[var(--primary)]` : 'border-none'}
  hover:bg-white hover:text-[var(--cta)] hover:border 
  border-[var(--cta)]'
`;
  return <button
    color={color}
    onClick={onClick}
    className={tailwindClasses}
  >
    {children}
  </button>;
}


