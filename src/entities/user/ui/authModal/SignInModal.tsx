import s from './SignInModal.module.scss';

import { useAppDispatch } from '@/shared/lib';
import { closeModal } from '@/features/modal';

import { Modal } from '@/shared/ui';

export function SignInModal() {
  const dispatch = useAppDispatch();
  return (
    <Modal
      onClose={() => dispatch(closeModal('signIn'))}
      name="auth"
      className={s.signInModal}
    >
      <div className={s.signInModal__inputs}></div>
    </Modal>
  );
}
