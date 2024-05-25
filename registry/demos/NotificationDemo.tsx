'use client'

import { useState } from 'react'
import Notification from '@/components/ui/notification'

export default function NotificationDemo() {
  const [showNotification, setShowNotification] = useState(false)

  return (
    <div className='flex flex-col items-center justify-center gap-5 lg:flex-row'>
      <button onClick={() => setShowNotification(true)}>Show Notification</button>
      {showNotification && (
        <Notification
          type="success"
          message="Resource shared successfully!"
          duration={5000}
          onClose={() => setShowNotification(false)}
        />
      )}
    </div>
  )
}
