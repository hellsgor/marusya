import { ERRORS_TEXTS, VALIDATION_RULES } from '../../constants';
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
    >
      <RHFTextInput<RegistrationFormModel>
        name="email"
        placeholder="Электронная почта"
        theme="light"
        icon={EmailIcon}
        rules={VALIDATION_RULES.email}
        type="email"
      />
      <RHFTextInput<RegistrationFormModel>
        name="name"
        placeholder="Имя"
        theme="light"
        icon={User}
        rules={VALIDATION_RULES.required}
      />
      <RHFTextInput<RegistrationFormModel>
        name="surname"
        placeholder="Фамилия"
        theme="light"
        icon={User}
        rules={VALIDATION_RULES.required}
      />
      <RHFTextInput<RegistrationFormModel>
        name="password"
        placeholder="Пароль"
        theme="light"
        icon={Password}
        rules={VALIDATION_RULES.required}
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
          validate: (value, formValues) =>
            value === formValues.password || ERRORS_TEXTS.e009,
          deps: ['password'],
        }}
      />
    </Form>
  );
}
