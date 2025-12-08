import { Modal } from '@/shared/ui';
import s from './AuthModal.module.scss';
import { useAppDispatch } from '@/shared/lib';
import { closeModal } from '@/features/modal';

export function AuthModal() {
  const dispatch = useAppDispatch();
  return (
    <Modal
      onClose={() => dispatch(closeModal('signIn'))}
      name="auth"
      className={s.authModal}
    >
      <p>i am auth modal</p>
    </Modal>
  );
}
