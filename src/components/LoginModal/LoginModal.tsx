import { closeModal, openModal } from '../../store/authModalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button } from '../../ui/Button/Button';
import { Modal } from '../../ui/Modal/Modal';
import { AuthForm } from '../AuthForm/AuthForm';

export function LoginModal() {
  const currentAuthModal = useAppSelector((state) => state.authModal);
  const dispatch = useAppDispatch();

  const handleRegistrationButtonClick = () => {
    dispatch(openModal('register'));
  };

  return (
    <Modal
      isVisible={currentAuthModal === 'login'}
      onClose={() => {
        dispatch(closeModal());
      }}
    >
      <AuthForm
        afterSuccess={() => {
          dispatch(closeModal());
        }}
      />
      <Button variant="ghost" onClick={handleRegistrationButtonClick}>
        Регистрация
      </Button>
    </Modal>
  );
}
