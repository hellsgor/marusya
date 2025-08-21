import st from './Modal.module.scss';
import clsx from 'clsx';

import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop } from '../Backdrop/Backdrop';
import { CloseButton } from '../CloseButton/CloseButton';
import { Logo } from '../Logo/Logo';

interface ModalProps {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
  isFlat?: boolean;
  className?: string;
}

export function Modal({
  children,
  isVisible,
  onClose,
  isFlat = false,
  className,
}: ModalProps) {
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add(st.modalOpen);
    }

    return () => {
      document.body.classList.remove(st.modalOpen);
    };
  }, [isVisible]);

  const modals = document.getElementById('modals');

  if (!modals) return;

  return createPortal(
    <div
      className={clsx(
        st.modal,
        isVisible ? st.modal_visible : null,
        isFlat ? st.modal_wide : null,
        className,
      )}
      onClick={onClose}
    >
      <Backdrop className={st.modal__backdrop} />

      <div
        className={clsx(
          st.modal__inner,
          !isFlat
            ? `${st.modal__inner_rounded} ${st.modal__inner_padded}`
            : null,
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <CloseButton className={st.modal__closeButton} onClick={onClose} />

        {!isFlat && <Logo className={st.modal__logo} />}

        {isVisible && children}
      </div>
    </div>,
    modals,
  );
}
