import s from './SignUpModal.module.scss';

import { useAppDispatch } from '@/shared/lib';
import { closeModal, openModal } from '@/features/modal';
import { Button, Modal } from '@/shared/ui';

export function SignUpModal() {
  const dispatch = useAppDispatch();
  return (
    <Modal
      name="sign-up"
      onClose={() => dispatch(closeModal('signUp'))}
      className={s.signUpModal}
    >
      <div className={s.signUpModal__wrapper}>
        <Button variant="ghost" onClick={() => dispatch(openModal('signIn'))}>
          У меня есть аккаунт
        </Button>
      </div>
    </Modal>
  );
}
