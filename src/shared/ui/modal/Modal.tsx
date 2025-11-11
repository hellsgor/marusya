import { createPortal } from 'react-dom';
import { Icon } from '../icon';
import { Logo } from '../logo';
import * as S from './Modal.styled';
import type { ModalProps } from './type';
import { useRef, type MouseEvent } from 'react';

export function Modal({
  children,
  type = 'default',
  isVisible,
  onClose,
  name,
}: ModalProps) {
  const modalBodyRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const handleCloseClick = (e: MouseEvent) => {
    if (!modalBodyRef) return;

    if (
      e.target === modalBodyRef.current ||
      (modalBodyRef.current?.contains(e.target as Node) &&
        !closeButtonRef.current?.contains(e.target as Node))
    ) {
      return;
    }

    onClose();
  };

  return createPortal(
    <S.Root
      $isVisible={isVisible}
      onClick={(e) => {
        handleCloseClick(e);
      }}
      {...(name && { 'data-modal-name': name })}
    >
      {isVisible && <S.GlobalScrollLock />}
      <S.Backdrop $type={type} $isVisible={isVisible} />
      <S.Inner $isVisible={isVisible} $type={type}>
        <S.Body $type={type} ref={modalBodyRef}>
          <S.CloseButton ref={closeButtonRef}>
            <Icon.Cross />
          </S.CloseButton>
          <S.BodyInner $type={type}>
            {type !== 'trailer' && <Logo />}
            {children}
          </S.BodyInner>
        </S.Body>
      </S.Inner>
    </S.Root>,
    document.getElementById('modals') as HTMLElement,
  );
}
