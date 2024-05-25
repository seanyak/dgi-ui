import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => (
  <Dialog.Root open={isOpen} onOpenChange={onClose}>
    <Dialog.Overlay className="modal-overlay" />
    <Dialog.Content className="modal">
      <Dialog.Title className="modal-header">
        {title}
        <Dialog.Close asChild>
          <button onClick={onClose} className="modal-close-button">&times;</button>
        </Dialog.Close>
      </Dialog.Title>
      <Dialog.Description className="modal-body">
        {children}
      </Dialog.Description>
      <div className="modal-footer">
        <Dialog.Close asChild>
          <button onClick={onClose} className="btn-primary mr-7">Close</button>
        </Dialog.Close>
      </div>
    </Dialog.Content>
  </Dialog.Root>
);

export default Modal;