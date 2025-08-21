import { closeModal, openModal } from '../../store/authModalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button } from '../../ui/Button/Button';
import { Modal } from '../../ui/Modal/Modal';
import { RegistrationForm } from '../Form/RegistrationForm';

export function RegisterModal() {
  const currentAuthModal = useAppSelector((state) => state.authModal);
  const dispatch = useAppDispatch();

  const handleLoginButtonClick = () => {
    dispatch(openModal('login'));
  };

  return (
    <Modal
      isVisible={currentAuthModal === 'register'}
      onClose={() => {
        dispatch(closeModal());
      }}
    >
      <>
        <h3 className="heading heading_3">Регистрация</h3>
        <RegistrationForm
          afterSuccess={() => {
            dispatch(openModal('thanks'));
          }}
        />
      </>
      <Button variant="ghost" onClick={handleLoginButtonClick}>
        У меня уже есть аккаунт
      </Button>
    </Modal>
  );
}
