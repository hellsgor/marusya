import { useAppSelector } from '@/shared/lib';
import { SignInModal, SignUpModal } from './ui';

export function SignInUp() {
  const isSignInModal = useAppSelector((state) => state.modal.modals.signIn);
  const isSignUpModal = useAppSelector((state) => state.modal.modals.signUp);
  const isSwitchingAuth = useAppSelector(
    (state) => state.modal.options.isSwitchingAuth,
  );

  return (
    <>
      {isSignInModal && <SignInModal skipBackdropAnimation={isSwitchingAuth} />}
      {isSignUpModal && <SignUpModal skipBackdropAnimation={isSwitchingAuth} />}
    </>
  );
}
