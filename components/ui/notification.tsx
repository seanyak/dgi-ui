import React, { useState, useEffect } from 'react';
import * as Toast from '@radix-ui/react-toast';

interface NotificationProps {
  type?: 'info' | 'success' | 'warning' | 'error';
  message: string;
  duration?: number;
  onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({ type = 'info', message, duration = 5000, onClose }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setOpen(false);
        if (onClose) onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  return (
    <Toast.Provider>
      <Toast.Root className={`notification notification-${type}`} open={open} onOpenChange={setOpen}>
        <Toast.Title>{message}</Toast.Title>
        <Toast.Action asChild altText="Close">
          <button onClick={() => setOpen(false)}>&times;</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport />
    </Toast.Provider>
  );
};

export default Notification;
