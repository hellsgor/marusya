import { SignUpForm } from '@/features/sign-up';
import { AuthModal } from '../auth-modal';
import { useAppDispatch } from '@/shared/lib';
import { closeModal, openModal } from '@/features/modal';

interface SignUpModalProps {
  skipBackdropAnimation?: boolean;
}

export function SignUpModal({
  skipBackdropAnimation = false,
}: SignUpModalProps) {
  const dispatch = useAppDispatch();

  return (
    <AuthModal
      modalName="signUp"
      switchTo="signIn"
      switchButtonText="У меня есть аккаунт"
      skipBackdropAnimation={skipBackdropAnimation}
      title="Регистрация"
    >
      <SignUpForm
        onSuccess={() => {
          dispatch(closeModal('signUp'));
          dispatch(openModal('signUpSuccess'));
        }}
      />
    </AuthModal>
  );
}
