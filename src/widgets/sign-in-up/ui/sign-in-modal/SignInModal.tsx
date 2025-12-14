import { closeModal } from '@/features/modal';
import { SignInForm } from '@/features/sign-in';
import { useAppDispatch } from '@/shared/lib';
import { Modal } from '@/shared/ui';

export function SignInModal() {
  const dispatch = useAppDispatch();

  return (
    <Modal onClose={() => dispatch(closeModal('signIn'))} name="auth">
      <SignInForm onSuccess={() => dispatch(closeModal('signIn'))} />
    </Modal>
  );
}
