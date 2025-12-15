import { useAppSelector } from '@/shared/lib';
import { SignInModal, SignUpModal } from './ui';

export function SignInUp() {
  const isSignInModal = useAppSelector((state) => state.modal.signIn);
  const isSignUpModal = useAppSelector((state) => state.modal.signUp);
  return (
    <>
      {isSignInModal && <SignInModal />}
      {isSignUpModal && <SignUpModal />}
    </>
  );
}
