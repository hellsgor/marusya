import { useProfile } from '../../hooks/useProfile';
import { closeModal, openModal } from '../../store/authModalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button } from '../../ui/Button/Button';
import { User } from '../../ui/icons';
import { MenuItem } from '../../ui/MenuItem/MenuItem';
import { Modal } from '../../ui/Modal/Modal';
import { AuthForm } from '../AuthForm/AuthForm';
import { RegistrationForm } from '../Form/RegistrationForm';
import { ThanksModal } from '../ThanksModal/ThanksModal';

interface AuthProps {
  isVertTablet: boolean;
}

export function Auth({ isVertTablet }: AuthProps) {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  const currentAuthModal = useAppSelector((state) => state.authModal);

  const dispatch = useAppDispatch();

  useProfile();

  const toggleModals = () => {
    dispatch(openModal(currentAuthModal === 'register' ? 'login' : 'register'));
  };

  return (
    <>
      {isLoggedIn && (
        <MenuItem
          href="/account"
          children={isVertTablet ? <User /> : user?.name}
        />
      )}

      {!isLoggedIn && (
        <>
          <MenuItem
            onClick={() => {
              dispatch(openModal('login'));
            }}
            children={isVertTablet ? <User /> : 'Войти'}
          />

          <Modal
            isVisible={
              currentAuthModal === 'login' || currentAuthModal === 'register'
            }
            onClose={() => {
              dispatch(closeModal());
            }}
          >
            {currentAuthModal === 'login' && (
              <AuthForm
                afterSuccess={() => {
                  dispatch(closeModal());
                }}
              />
            )}
            {currentAuthModal === 'register' && (
              <>
                <h3 className="heading heading_3">Регистрация</h3>
                <RegistrationForm
                  afterSuccess={() => {
                    dispatch(openModal('thanks'));
                  }}
                />
              </>
            )}

            <Button variant="ghost" onClick={toggleModals}>
              {currentAuthModal === 'login' && 'Регистрация'}
              {currentAuthModal === 'register' && 'У меня уже есть аккаунт'}
            </Button>
          </Modal>
          <ThanksModal />
        </>
      )}
    </>
  );
}
