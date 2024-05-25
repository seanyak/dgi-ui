import * as React from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva('inline-flex items-center text-xs font-medium', {
  variants: {
    size: {
      default: 'px-2.5 py-0.5',
      sm: 'px-1.5 py-0.5',
      lg: 'px-2.5 py-0.5 text-sm',
      xl: 'px-2.5 py-0.5 text-base',
    },
    fill: {
      solid: '',
      muted: '',
    },
    shape: {
      square: 'rounded-none',
      rounded: 'rounded-sm',
      pill: 'rounded-full',
    },
    coloring: {
      default: 'bg-primary text-primary-foreground',
      destructive: 'bg-[#ff4431] text-[#fff]',
      gray: 'bg-[#a8aeaf] text-[#03090a]',
      yellow: 'bg-[#ffee3f] text-[#070814]',
      green: 'bg-[#45c56f] text-[#f6edf3]',
      blue: 'bg-[#5df2ff] text-[#110706]',
      purple: 'bg-[#7d86df] text-[#f6f5ee]',
      red: 'bg-[#ff654e] text-[#eff5f6]',
    },
    separation: {
      none: '',
      outline: 'outline outline-2 outline-background',
      shadow: 'shadow-primary/30 shadow-md',
    },
  },
  compoundVariants: [
    {
      fill: 'solid',
      coloring: 'yellow',
      class: 'bg-[#F5BC00] text-[#fff]',
    },
    {
      fill: 'solid',
      coloring: 'green',
      class: 'bg-[#118878] text-[#fff]',
    },
    {
      fill: 'solid',
      coloring: 'blue',
      class: 'bg-[#0C78A7] text-[#fff]',
    },
    {
      fill: 'solid',
      coloring: 'purple',
      class: 'bg-[#7247B8] text-[#fff]',
    },
    {
      fill: 'solid',
      coloring: 'red',
      class: 'bg-[#DD4040] text-[#fff]',
    },
  ],
  defaultVariants: {
    separation: 'none',
    size: 'default',
    fill: 'muted',
    coloring: 'default',
    shape: 'rounded',
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = ({
  className,
  size,
  fill,
  shape,
  coloring,
  separation,
  ...props
}: BadgeProps) => (
  <div
    className={cn(
      badgeVariants({ size, fill, shape, coloring, separation }),
      className
    )}
    {...props}
  />
)

export { Badge, badgeVariants }
