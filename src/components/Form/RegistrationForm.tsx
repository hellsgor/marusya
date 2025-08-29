import { ERRORS_TEXTS } from '../../constants';
import { REGS } from '../../constants/regs';
import { useRegistration } from '../../hooks/useRegistration';
import type { RegistrationFormModel } from '../../models';
import { EmailIcon, Password, User } from '../../ui/icons';
import { RHFTextInput } from '../../ui/TextInput/RHFTextInput';
import { Form } from './Form';

export function RegistrationForm({
  afterSuccess,
}: {
  afterSuccess: () => void;
}) {
  const { mutateAsync, isPending, error } = useRegistration();
  return (
    <Form<RegistrationFormModel>
      submitButtonText="Создать аккаунт"
      isSubmitting={isPending}
      errorStatusCode={error?.status}
      onSubmit={({ confirmPassword, ...payload }) => mutateAsync(payload)}
      afterSuccess={afterSuccess}
      beforeSubmit={(vals, methods) => {
        if (vals.password !== vals.confirmPassword) {
          methods.setError('confirmPassword', {
            type: 'validate',
            message: ERRORS_TEXTS.e009,
          });
          methods.setFocus('confirmPassword');
          return false;
        }
        return true;
      }}
    >
      <RHFTextInput<RegistrationFormModel>
        name="email"
        placeholder="Электронная почта"
        theme="light"
        icon={EmailIcon}
        rules={{
          required: ERRORS_TEXTS.e004,
          pattern: { value: REGS.EMAIL, message: ERRORS_TEXTS.e007 },
        }}
        type="email"
      />
      <RHFTextInput<RegistrationFormModel>
        name="name"
        placeholder="Имя"
        theme="light"
        icon={User}
        rules={{ required: ERRORS_TEXTS.e004 }}
      />
      <RHFTextInput<RegistrationFormModel>
        name="surname"
        placeholder="Фамилия"
        theme="light"
        icon={User}
        rules={{ required: ERRORS_TEXTS.e004 }}
      />
      <RHFTextInput<RegistrationFormModel>
        name="password"
        placeholder="Пароль"
        theme="light"
        icon={Password}
        rules={{ required: ERRORS_TEXTS.e004 }}
        type="password"
      />
      <RHFTextInput<RegistrationFormModel>
        name="confirmPassword"
        placeholder="Подтвердите пароль"
        theme="light"
        icon={Password}
        type="password"
        rules={{
          required: ERRORS_TEXTS.e008,
        }}
      />
    </Form>
  );
}
