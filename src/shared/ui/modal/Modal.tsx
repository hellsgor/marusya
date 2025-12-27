import s from './Modal.module.scss';
import clsx from 'clsx';

import type { ModalProps } from './Modal.types';
import type { MouseEvent } from 'react';

import { createPortal } from 'react-dom';
import { useEffect, useRef } from 'react';

import { ButtonClosed } from '@/shared/ui/button-closed';
import { Logo } from '@/shared/ui/logo';

export function Modal({
  children,
  type = 'default',
  onClose,
  name,
  className,
  skipBackdropAnimation = false,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalBodyRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (!modalElement) return;

    if (skipBackdropAnimation) {
      modalElement.style.opacity = '1';
      modalElement.style.pointerEvents = 'auto';
      modalElement.classList.add(s.modal_opened);
      modalElement.classList.add(s.modal_noBackdropAnimation);
    } else {
      modalElement.classList.add(s.modal_opened);
      modalElement.classList.remove(s.modal_noBackdropAnimation);
    }
  }, [skipBackdropAnimation]);

  const handleCloseClick = (e: MouseEvent) => {
    if (!modalBodyRef) return;

    if (
      e.target === modalBodyRef.current ||
      (modalBodyRef.current?.contains(e.target as Node) &&
        !closeButtonRef.current?.contains(e.target as Node))
    ) {
      return;
    }

    if (skipBackdropAnimation) {
      onClose();
      return;
    }

    const handleTransitionEnd = () => {
      modalRef.current?.removeEventListener(
        'transitionend',
        handleTransitionEnd,
      );
      onClose();
    };

    modalRef.current?.classList.remove(s.modal_opened);
    modalRef.current?.addEventListener('transitionend', handleTransitionEnd);
  };

  return createPortal(
    <div
      ref={modalRef}
      className={clsx(
        s.modal,
        type === 'trailer' && s.modal_trailer,
        className,
      )}
      onClick={(e) => {
        handleCloseClick(e);
      }}
      {...(name && { 'data-modal-name': name })}
    >
      <div className={s.modal__backdrop} />
      <div className={s.modal__inner}>
        <div className={s.modal__body} ref={modalBodyRef}>
          <ButtonClosed className={s.modal__closeButton} ref={closeButtonRef} />
          <div className={s.modal__bodyInner}>
            {type !== 'trailer' && <Logo />}
            {children}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById('modals') as HTMLElement,
  );
}
