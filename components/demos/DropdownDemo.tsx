'use client';

import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const DropdownDemo = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger className="dropdown-menu-trigger">
      Homeschooling Resources
      <ChevronDownIcon className="dropdown-menu-chevron" aria-hidden />
    </DropdownMenu.Trigger>

    <DropdownMenu.Content className="dropdown-menu-content">
      <DropdownMenuItem>Local Homeschool Groups</DropdownMenuItem>
      <DropdownMenuItem>Homeschooling Methods</DropdownMenuItem>
      <DropdownMenuItem>Popular Curriculum by Subject</DropdownMenuItem>
      <DropdownMenuItem>Local Educational Activities</DropdownMenuItem>
      <DropdownMenuItem>Online Learning Resources</DropdownMenuItem>
      <DropdownMenuItem>Homeschooling Workshops and Events</DropdownMenuItem>
      <DropdownMenuItem>Support for Special Needs</DropdownMenuItem>
      <DropdownMenuItem>Homeschooling Laws and Regulations</DropdownMenuItem>
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
      className={`dropdown-menu-item ${className || ''}`}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </DropdownMenu.Item>
  )
);

export default DropdownDemo;
