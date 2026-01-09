import type { ReactNode } from 'react';

export const MODAL_TYPES = {
  DEFAULT: 'DEFAULT',
  TRAILER: 'TRAILER',
  EMPTY: 'EMPTY',
} as const;

export type ModalTypes = (typeof MODAL_TYPES)[keyof typeof MODAL_TYPES];

export type ModalProps = {
  children?: ReactNode;
  onClose: () => void;
  type: ModalTypes;
  className?: string;
  skipBackdropAnimation?: boolean;
};
