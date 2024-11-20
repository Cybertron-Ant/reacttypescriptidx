/**
 * Common interfaces for both inheritance and composition patterns
 */

export interface DialogProps {
  title: string;
  content: string;
  onClose: () => void;
}

export interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}
