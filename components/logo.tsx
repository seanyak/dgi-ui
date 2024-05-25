'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function HomeLogo() {
  // Access the current theme using the useTheme hook from next-themes
  const { theme } = useTheme()

  return (
    <Link
      href='/docs/overview/introduction'
      className='flex items-center justify-between gap-1'
    >
      {/* Light mode logo image */}
      <Image
        className={`relative top-[2px] ${theme === 'dark' ? 'hidden' : 'block'}`}
        src='/images/dgi_logo.svg'
        width={63}
        height={38}
        alt='UI Logo'
      />
      {/* Dark mode logo image */}
      <Image
        className={`relative top-[2px] ${theme === 'dark' ? 'block' : 'hidden'}`}
        src='/images/dgi_logodark.svg'
        width={63}
        height={38}
        alt='UI Logo'
      />
      <h1 className='absolute bottom-3 left-24 font-satoshi text-xl font-bold'>UI</h1>

    </Link>
  )
}
