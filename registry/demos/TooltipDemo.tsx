'use client'

import { Tooltip, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip'

export default function TooltipDemo() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 lg:flex-row'>
      <Tooltip>
        <TooltipTrigger asChild>
          <button>Hover over me</button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <div className="tooltip-content">This is a tooltip</div>
        </TooltipContent>
      </Tooltip>
    </div>
  )
}
