import { useProfile } from '../../hooks/useProfile';
import { closeModal, openModal } from '../../store/authModalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button } from '../../ui/Button/Button';
import { User } from '../../ui/icons';
import { MenuItem } from '../../ui/MenuItem/MenuItem';
import { Modal } from '../../ui/Modal/Modal';
import { AuthForm } from '../AuthForm/AuthForm';

interface AuthProps {
  isVertTablet: boolean;
}

export function Auth({ isVertTablet }: AuthProps) {
  const { isLoggedIn, user } = useAppSelector((state) => state.auth);
  const currentAuthModal = useAppSelector((state) => state.authModal);

  const dispatch = useAppDispatch();

  useProfile();

  const handleToggleModalsClick = () => {
    dispatch(openModal('register'));
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
            isVisible={currentAuthModal === 'login'}
            onClose={() => {
              dispatch(closeModal());
            }}
          >
            <AuthForm />
            <Button variant="ghost" onClick={handleToggleModalsClick}>
              Регистрация
            </Button>
          </Modal>
        </>
      )}
    </>
  );
}
