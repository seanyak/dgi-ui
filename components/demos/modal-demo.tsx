import React, { useState } from 'react';
import Modal from '@/components/ui/modal';
import Input from '@/components/ui/input';
import { Button } from '../ui/button';

const ModalDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>Modal Component</h2>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="New Resource">
        <p>Add a new resource to share with the community.</p>
        <Input type="text" value="" onChange={() => {}} placeholder="Resource Name" />
        <Input type="text" value="" onChange={() => {}} placeholder="Resource URL" />
        <Button onClick={() => setIsOpen(false)} className="btn-primary">
          Save Resource
        </Button>
      </Modal>
    </div>
  );
};

export default ModalDemo;
