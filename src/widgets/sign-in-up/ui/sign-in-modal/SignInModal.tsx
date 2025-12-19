import { closeModal } from '@/features/modal';
import { SignInForm } from '@/features/sign-in';
import { useAppDispatch } from '@/shared/lib';
import { AuthModal } from '../auth-modal';

interface SignInModalProps {
  skipBackdropAnimation?: boolean;
}

export function SignInModal({
  skipBackdropAnimation = false,
}: SignInModalProps) {
  const dispatch = useAppDispatch();

  return (
    <AuthModal
      modalName="signIn"
      switchTo="signUp"
      switchButtonText="Регистрация"
      skipBackdropAnimation={skipBackdropAnimation}
    >
      <SignInForm onSuccess={() => dispatch(closeModal('signIn'))} />
    </AuthModal>
  );
}
