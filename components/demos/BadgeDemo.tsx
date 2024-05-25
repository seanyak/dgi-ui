'use client'

import { Badge } from '../ui/badge'

export default function BadgeDemo() {
  return (
    <div className='flex flex-col items-center justify-center gap-5 lg:flex-row'>
      <Badge shape='pill'>Default</Badge>
      <Badge coloring='gray' shape='pill'>
        Gray
      </Badge>
      <Badge coloring='yellow' shape='pill'>
        Yellow
      </Badge>
      <Badge coloring='green' shape='pill'>
        Green
      </Badge>
      <Badge coloring='blue' shape='pill'>
        Blue
      </Badge>
      <Badge coloring='purple' shape='pill'>
        Purple
      </Badge>
      <Badge coloring='red' shape='pill'>
        Red
      </Badge>
      <Badge coloring='destructive' shape='pill'>
        Destructive
      </Badge>
    </div>
  )
}
