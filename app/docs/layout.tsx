'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import GlobalNav from '@/components/globalNav';
import { RemoveScroll } from 'react-remove-scroll';

import { cn } from '@/lib/utils';

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (mobileNavOpen) {
      setMobileNavOpen((prev) => !prev); // Functional update to handle the previous state
    }
  }, [pathname]);

  return (
    <main className={cn('flex h-screen flex-col')}>
      <GlobalNav
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
      />
      <RemoveScroll enabled={mobileNavOpen} noIsolation={true}>
        {children}
      </RemoveScroll>
    </main>
  );
}
