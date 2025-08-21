import { closeModal, openModal } from '../../store/authModalSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button } from '../../ui/Button/Button';
import { Modal } from '../../ui/Modal/Modal';
import st from './ThanksModal.module.scss';

export function ThanksModal() {
  const currentAuthModal = useAppSelector((state) => state.authModal);
  const dispatch = useAppDispatch();

  return (
    <Modal
      isVisible={currentAuthModal === 'thanks'}
      onClose={() => {
        dispatch(closeModal());
      }}
      className={st.thanksModal}
    >
      <div className={st.thanksModal__content}>
        <h3 className="heading heading_3">Регистрация завершена</h3>
        <p>Используйте вашу электронную почту для входа</p>
        <Button
          variant="primary"
          wide={true}
          onClick={() => {
            dispatch(openModal('login'));
          }}
        >
          Войти
        </Button>
      </div>
    </Modal>
  );
}
