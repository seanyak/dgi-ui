import { NavRoot, NavList, NavGroup, NavItem } from './ui/navMenu'

import { cn } from '@/lib/utils'

type SidebarProps = {
  mobileNavOpen: boolean
}

export default function Sidebar({ mobileNavOpen }: SidebarProps) {
  return (
    <aside
      className={cn(
        'scrollbar-light fixed bottom-0 top-[70px] z-20 w-full overflow-hidden bg-background px-3 py-7 hover:overflow-y-scroll lg:static lg:mt-[70px] lg:block lg:w-[250px]',
        !mobileNavOpen && 'hidden'
      )}
    >
      <NavRoot>
        <NavList>
          <NavGroup label='Overview'>
            <NavItem href='/docs/overview/introduction'>Introduction</NavItem>
            <NavItem href='/docs/overview/installation'>Installation</NavItem>
            <NavItem href='/docs/overview/getting-started'>
              Getting started
            </NavItem>
          </NavGroup>
          <NavGroup label='Components'>
            <NavItem href='/docs/components/accordion'>Accordion</NavItem>
            <NavItem href='/docs/components/badge'>Badge</NavItem>
            <NavItem href='/docs/components/button'>Button</NavItem>
            <NavItem href='/docs/components/card'>Card</NavItem>
            <NavItem href='/docs/components/collapsible'>Collapsible</NavItem>
            <NavItem href='/docs/components/dropdown'>Dropdown</NavItem>
            <NavItem href='/docs/components/input'>Input</NavItem>
            <NavItem href='/docs/components/modal'>Modal</NavItem>
            <NavItem href='/docs/components/notification'>Notification</NavItem>
            <NavItem href='/docs/components/select'>Select</NavItem>
            <NavItem href='/docs/components/tabs'>Tabs</NavItem>
            <NavItem href='/docs/components/tooltip'>Tooltip</NavItem>
          </NavGroup>
        </NavList>
      </NavRoot>
    </aside>
  )
}
