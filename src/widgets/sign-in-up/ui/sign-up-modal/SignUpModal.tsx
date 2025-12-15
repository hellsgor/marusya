import { AuthModal } from '../auth-modal';

interface SignUpModalProps {
  skipBackdropAnimation?: boolean;
}

export function SignUpModal({
  skipBackdropAnimation = false,
}: SignUpModalProps) {
  return (
    <AuthModal
      modalName="signUp"
      switchTo="signIn"
      switchButtonText="У меня есть аккаунт"
      skipBackdropAnimation={skipBackdropAnimation}
    />
  );
}
