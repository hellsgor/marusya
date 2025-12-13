import s from './SignInModal.module.scss';

import { useAppDispatch } from '@/shared/lib';
import { closeModal } from '@/features/modal';

import { InputPassword, InputsWrapper, InputText, Modal } from '@/shared/ui';

export function SignInModal() {
  const dispatch = useAppDispatch();
  return (
    <Modal
      onClose={() => dispatch(closeModal('signIn'))}
      name="auth"
      className={s.signInModal}
    >
      <InputsWrapper className={s.signInModal__inputs}>
        <InputText
          placeholder="Электронная почта"
          type="email"
          name="email"
          autoComplete="email"
          inputMode="email"
          icon="Email"
        />
        <InputPassword placeholder="Пароль" name="password" />
      </InputsWrapper>
    </Modal>
  );
}
