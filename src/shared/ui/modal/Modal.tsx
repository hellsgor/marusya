import s from './Modal.module.scss';
import clsx from 'clsx';

import type { ModalProps } from './Modal.types';

import { createPortal } from 'react-dom';
import { useEffect, useRef, type MouseEvent } from 'react';

import { Icon } from '../icon';
import { Logo } from '../logo';

export function Modal({
  children,
  type = 'default',
  onClose,
  name,
  className,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const modalBodyRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!modalRef.current) return;
    modalRef.current?.classList.add(s.modal_opened);
  }, [modalRef]);

  const handleCloseClick = (e: MouseEvent) => {
    if (!modalBodyRef) return;

    if (
      e.target === modalBodyRef.current ||
      (modalBodyRef.current?.contains(e.target as Node) &&
        !closeButtonRef.current?.contains(e.target as Node))
    ) {
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
          <button
            className={s.modal__closeButton}
            type="button"
            ref={closeButtonRef}
          >
            <Icon.Cross />
          </button>
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
