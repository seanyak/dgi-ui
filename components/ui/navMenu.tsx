'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import React from 'react'

const NavRoot = ({ children }: { children: React.ReactNode }) => {
  return <nav className='flex flex-col'>{children}</nav>
}

const NavList = ({ children }: { children: React.ReactNode }) => {
  return <ul className='flex flex-col gap-2'>{children}</ul>
}

const NavGroup = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => {
  return (
    <li className='flex list-none flex-col '>
      <h4 className='mb-1 pl-3 text-sm font-bold'>{label}</h4>
      <ul className='flex flex-col gap-0.7'>{children}</ul>
    </li>
  )
}

const NavItem = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => {
  const pathname = usePathname()

  return (
    <li className='flex list-none items-center'>
      <Link
        href={href}
        className={cn(
          'h-full w-full rounded-full py-1.5 pl-3 text-[.9rem] hover:bg-cyan-100 dark:hover:bg-sky-700',
          href === pathname &&
            'bg-cyan-200 hover:bg-cyan-200 font-medium  dark:bg-sky-900'
        )}
      >
        {children}
      </Link>
    </li>
  )
}

export { NavRoot, NavList, NavGroup, NavItem }
