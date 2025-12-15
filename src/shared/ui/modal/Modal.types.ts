import type { ReactNode } from 'react';

export type ModalType = 'default' | 'trailer';

export type ModalProps = {
  children?: ReactNode;
  type?: ModalType;
  onClose: () => void;
  name?: string;
  className?: string;
  skipBackdropAnimation?: boolean;
};
