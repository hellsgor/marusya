import { AuthModal } from '@/entities/user';
import { useAppSelector } from '@/shared/lib';

export function SignInUp() {
  const isSignInModal = useAppSelector((state) => state.modal.signIn);
  return <>{isSignInModal && <AuthModal />}</>;
}
