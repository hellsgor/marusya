import s from './SignInModal.module.scss';

import { closeModal, openModal } from '@/features/modal';
import { SignInForm } from '@/features/sign-in';
import { useAppDispatch } from '@/shared/lib';
import { Button, Modal } from '@/shared/ui';

export function SignInModal() {
  const dispatch = useAppDispatch();

  return (
    <Modal
      onClose={() => dispatch(closeModal('signIn'))}
      name="sign-in"
      className={s.signInModal}
    >
      <div className={s.signInModal__wrapper}>
        <SignInForm onSuccess={() => dispatch(closeModal('signIn'))} />
        <Button variant="ghost" onClick={() => dispatch(openModal('signUp'))}>
          Регистрация
        </Button>
      </div>
    </Modal>
  );
}
