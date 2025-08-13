import type { LoginModel } from '../../models/User';
import { queryClient } from '../../api/queryClient';
import { useAuth } from '../../hooks/useAuth';
import { EmailIcon, Password } from '../../ui/icons';
import { RHFTextInput } from '../../ui/TextInput/RHFTextInput';
import { Form } from '../Form/Form';

export function AuthForm({ afterSuccess }: { afterSuccess: () => void }) {
  const { mutateAsync, isPending, isError, error } = useAuth(async () => {
    await queryClient.invalidateQueries({ queryKey: ['profile'] });
  });

  const serverErrorKey = isError
    ? error.status
      ? error.status >= 404
        ? 'e006'
        : 'e005'
      : 'e001'
    : undefined;

  return (
    <Form<LoginModel>
      submitButtonText="Войти"
      isSubmitting={isPending}
      serverErrorKey={serverErrorKey}
      onSubmit={(values) => mutateAsync(values)}
      afterSuccess={afterSuccess}
    >
      <RHFTextInput<LoginModel>
        name="email"
        placeholder="Электронная почта"
        theme="light"
        icon={EmailIcon}
        rules={{ required: true }}
        type="email"
      />
      <RHFTextInput<LoginModel>
        name="password"
        placeholder="Пароль"
        theme="light"
        icon={Password}
        rules={{ required: true }}
        type={'password'}
      />
    </Form>
  );
}
