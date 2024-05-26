'use client';

import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/utils';

const ScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root> & {
    orientation: 'horizontal' | 'vertical' | undefined;
  }
>(({ className, children, orientation, ...props }, ref) => {
  // console.log(orientation)
  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport className='h-full w-full rounded-[inherit]'>
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollAreaPrimitive.ScrollAreaScrollbar
        orientation={orientation}
        className={cn(
          'flex touch-none select-none transition-colors',
          orientation === undefined || orientation === 'vertical'
            ? 'h-full w-2 border-l border-l-transparent p-[1px]'
            : 'h-2.5 border-t border-t-transparent p-[1px]',
          className
        )}
      >
        <ScrollAreaPrimitive.ScrollAreaThumb className='relative flex-1 rounded-full bg-border' />
      </ScrollAreaPrimitive.ScrollAreaScrollbar>
      <ScrollAreaPrimitive.ScrollAreaCorner />
    </ScrollAreaPrimitive.Root>
  );
});

ScrollArea.displayName = 'ScrollArea'; // Add a display name for better debugging

export default ScrollArea;
