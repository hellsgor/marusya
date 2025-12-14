import { SignInModal } from './ui';
import { useAppSelector } from '@/shared/lib';

export function SignInUp() {
  const isSignInModal = useAppSelector((state) => state.modal.signIn);
  return <>{isSignInModal && <SignInModal />}</>;
}
