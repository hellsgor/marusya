import { useAppSelector } from '@/shared/lib';
import { SignInModal, SignUpModal, SignUpSuccessModal } from '..';

export function SignInUp() {
  const isSignInModal = useAppSelector((state) => state.modal.modals.signIn);
  const isSignUpModal = useAppSelector((state) => state.modal.modals.signUp);
  const isSignUpSuccess = useAppSelector(
    (state) => state.modal.modals.signUpSuccess,
  );
  const isSwitchingAuth = useAppSelector(
    (state) => state.modal.options.isSwitchingAuth,
  );

  return (
    <>
      {isSignInModal && <SignInModal skipBackdropAnimation={isSwitchingAuth} />}
      {isSignUpModal && <SignUpModal skipBackdropAnimation={isSwitchingAuth} />}
      {isSignUpSuccess && (
        <SignUpSuccessModal skipBackdropAnimation={isSwitchingAuth} />
      )}
    </>
  );
}
