'use client'

import { useState } from 'react'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '../ui/collapsible'
import { ChevronRight, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function CollapsibleDemo() {
  return (
    <div className='collapsible-demo'>
      <h3 className='demo-title'>Create Group</h3>
      <div className='demo-content'>
        <TeamName />
        <Plans />
        <CollapsibleComponent />
      </div>
    </div>
  )
}

export function TeamName() {
  return (
    <div className='team-name'>
      <label htmlFor='team-name'>Group Name</label>
      <input
        type='text'
        id='group-name'
        name='group-name'
        placeholder='New Group'
        className='team-name-input'
      />
    </div>
  )
}

export function Plans() {
  const [selectedPlan, setSelectedPlan] = useState('trial')

  return (
    <div className='plans'>
      <button
        className={cn('plan-button', selectedPlan === 'public' && 'plan-selected')}
        onClick={() => setSelectedPlan('public')}
      >
        <h4 className='plan-title'>Public</h4>
        <p className='plan-description'>Anyone can find your group</p>
      </button>
      <button
        className={cn('plan-button', selectedPlan === 'private' && 'plan-selected')}
        onClick={() => setSelectedPlan('private')}
      >
        <h4 className='plan-title'>Private</h4>
        <p className='plan-description'>Group admin invites members</p>
      </button>
    </div>
  )
}

export function CollapsibleComponent() {
  const [isOpened, setIsOpened] = useState(false)
  
  const handleLearnMoreClick = () => {
    setIsOpened(false)
  }

  return (
    <Collapsible open={isOpened} onOpenChange={setIsOpened}>
      <CollapsibleTrigger>
        <div className='collapsible-trigger'>
          {isOpened ? <ChevronDown size={20} className='collapsible-icon' /> : <ChevronRight size={20} className='collapsible-icon' />}
          <h4 className='collapsible-title'>
            Continuing will create a new group
          </h4>
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent
        forceMount
        className={cn('collapsible-content', isOpened && 'collapsible-content-open')}
      >
        <div className='collapsible-details'>
          <p className='collapsible-text'>
            Creating a new group will give you administrative authorization.
          </p>
          <p className='collapsible-link'>
            <Link href="#" onClick={handleLearnMoreClick}>
              Learn more
            </Link>
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
