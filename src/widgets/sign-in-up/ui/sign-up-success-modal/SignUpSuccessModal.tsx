import { AuthModal } from '../auth-modal';

interface SignUpSuccessModalProps {
  skipBackdropAnimation?: boolean;
}

export function SignUpSuccessModal({
  skipBackdropAnimation,
}: SignUpSuccessModalProps) {
  return (
    <AuthModal
      modalName="signUpSuccess"
      switchTo="signIn"
      switchButtonText="Войти"
      skipBackdropAnimation={skipBackdropAnimation}
      title="Регистрация завершена"
    >
      <p>Используйте вашу электронную почту для входа</p>
    </AuthModal>
  );
}
