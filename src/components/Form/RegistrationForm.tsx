import { ERRORS_TEXTS } from '../../constants';
import { REGS } from '../../constants/regs';
import { useRegistration } from '../../hooks/useRegistration';
import type { UserModel } from '../../models';
import { EmailIcon, Password, User } from '../../ui/icons';
import { RHFTextInput } from '../../ui/TextInput/RHFTextInput';
import { Form } from './Form';

export function RegistrationForm({
  afterSuccess,
}: {
  afterSuccess: () => void;
}) {
  const { mutateAsync, isPending, isError, error } = useRegistration();

  const serverErrorKey = isError
    ? error.status
      ? error.status >= 400
        ? 'e006'
        : 'e001'
      : 'e001'
    : undefined;
  return (
    <Form<UserModel>
      submitButtonText="Создать аккаунт"
      isSubmitting={isPending}
      serverErrorKey={serverErrorKey}
      onSubmit={(values) => mutateAsync(values)}
      afterSuccess={afterSuccess}
    >
      <RHFTextInput<UserModel>
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
      <RHFTextInput<UserModel>
        name="name"
        placeholder="Имя"
        theme="light"
        icon={User}
        rules={{ required: true }}
      />
      <RHFTextInput<UserModel>
        name="surname"
        placeholder="Фамилия"
        theme="light"
        icon={User}
        rules={{ required: true }}
      />
      <RHFTextInput<UserModel>
        name="password"
        placeholder="Пароль"
        theme="light"
        icon={Password}
        rules={{ required: true }}
        type="password"
      />
      <RHFTextInput<UserModel>
        name="password"
        placeholder="Подтвердите пароль"
        theme="light"
        icon={Password}
        rules={{ required: true }}
        type="password"
      />
    </Form>
  );
}
