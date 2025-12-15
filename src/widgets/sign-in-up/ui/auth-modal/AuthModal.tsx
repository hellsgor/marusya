import s from './AuthModal.module.scss';

import { closeModal, switchAuthModal } from '@/features/modal';
import { useAppDispatch } from '@/shared/lib';
import { Button, Modal } from '@/shared/ui';
import type { ReactNode } from 'react';

interface AuthModalProps {
  modalName: 'signIn' | 'signUp';
  switchTo: 'signIn' | 'signUp';
  switchButtonText: string;
  skipBackdropAnimation?: boolean;
  children?: ReactNode;
}

export function AuthModal({
  modalName,
  switchTo,
  switchButtonText,
  skipBackdropAnimation = false,
  children,
}: AuthModalProps) {
  const dispatch = useAppDispatch();

  return (
    <Modal
      onClose={() => dispatch(closeModal(modalName))}
      name={modalName === 'signIn' ? 'sign-in' : 'sign-up'}
      className={s.authModal}
      skipBackdropAnimation={skipBackdropAnimation}
    >
      <div className={s.authModal__wrapper}>
        {children}
        <Button
          variant="ghost"
          onClick={() => dispatch(switchAuthModal(switchTo))}
        >
          {switchButtonText}
        </Button>
      </div>
    </Modal>
  );
}
