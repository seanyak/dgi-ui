'use client'

import React, { useState } from 'react';
import Modal from '@/components/ui/modal';
import Input from '@/components/ui/input';
import { Button } from '../ui/button';

export default function ModalDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='flex flex-col items-center justify-center gap-5 lg:flex-row'>
      <button onClick={() => setIsOpen(true)} className="btn-primary">Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="New Resource">
        <p>Add a new resource to share with the community.</p>
        <Input type="text" value="" onChange={() => {}} placeholder="Resource Name" className="pt-3" />
        <Input type="text" value="" onChange={() => {}} placeholder="Resource URL" className="pt-3" />
        <Button onClick={() => setIsOpen(false)} className="btn-primary ml-7 mt-3">
          Save Resource
        </Button>
      </Modal>
    </div>
  )
}