import React from 'react';

/**
 * Dialog Component using Composition Pattern
 * 
 * Composition Pros:
 * - More flexible and reusable
 * - Loose coupling between components
 * - Easier to modify and extend
 * - Better separation of concerns
 * 
 * Composition Cons:
 * - May require more initial setup
 * - Can be more verbose
 */

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        {children}
      </div>
    </div>
  );
};

interface DialogHeaderProps {
  children: React.ReactNode;
}

export const DialogHeader: React.FC<DialogHeaderProps> = ({ children }) => (
  <div className="bg-gray-100 px-4 py-2 border-b">{children}</div>
);

interface DialogContentProps {
  children: React.ReactNode;
}

export const DialogContent: React.FC<DialogContentProps> = ({ children }) => (
  <div className="p-4">{children}</div>
);

interface DialogFooterProps {
  children: React.ReactNode;
}

export const DialogFooter: React.FC<DialogFooterProps> = ({ children }) => (
  <div className="bg-gray-50 px-4 py-3 border-t flex justify-end space-x-2">
    {children}
  </div>
);

export default Dialog;
