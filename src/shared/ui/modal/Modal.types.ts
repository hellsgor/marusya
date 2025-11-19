import type { ReactNode } from 'react';

export type ModalType = 'default' | 'trailer';

export type ModalProps = {
  children?: ReactNode;
  type?: ModalType;
  isVisible: boolean;
  onClose: () => void;
  name?: string;
  className?: string;
};
