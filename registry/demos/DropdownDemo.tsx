'use client';

import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const DropdownMenuDemo = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger className="DropdownMenuTrigger">
      Homeschool Resources
      <ChevronDownIcon className="DropdownMenuChevron" aria-hidden />
    </DropdownMenu.Trigger>

    <DropdownMenu.Content className="DropdownMenuContent">
      <DropdownMenuItem>Math Resources</DropdownMenuItem>
      <DropdownMenuItem>Science Projects</DropdownMenuItem>
      <DropdownMenuItem>History Lessons</DropdownMenuItem>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
);

interface DropdownMenuItemProps extends React.ComponentPropsWithoutRef<typeof DropdownMenu.Item> {
  children: React.ReactNode;
  className?: string;
}

const DropdownMenuItem = React.forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <DropdownMenu.Item
      className={`DropdownMenuItem ${className || ''}`}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </DropdownMenu.Item>
  )
);

export default DropdownMenuDemo;
