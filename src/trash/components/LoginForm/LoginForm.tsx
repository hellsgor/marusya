import type { LoginModel } from '../../models/User';
import { queryClient } from '../../api/queryClient';
import { useAuth } from '../../hooks/useAuth';
import { EmailIcon, Password } from '../../ui/icons';
import { RHFTextInput } from '../../ui/TextInput/RHFTextInput';
import { Form } from '../Form/Form';
import { VALIDATION_RULES } from '../../constants';

export function LoginForm({ afterSuccess }: { afterSuccess: () => void }) {
  const { mutateAsync, isPending, error } = useAuth(async () => {
    await queryClient.invalidateQueries({ queryKey: ['profile'] });
  });

  return (
    <Form<LoginModel>
      submitButtonText="Войти"
      isSubmitting={isPending}
      errorStatusCode={error?.status}
      onSubmit={(values) => mutateAsync(values)}
      afterSuccess={afterSuccess}
    >
      <RHFTextInput<LoginModel>
        name="email"
        placeholder="Электронная почта"
        theme="light"
        icon={EmailIcon}
        rules={VALIDATION_RULES.email}
        type="email"
      />
      <RHFTextInput<LoginModel>
        name="password"
        placeholder="Пароль"
        theme="light"
        icon={Password}
        rules={VALIDATION_RULES.required}
        type={'password'}
      />
    </Form>
  );
}
