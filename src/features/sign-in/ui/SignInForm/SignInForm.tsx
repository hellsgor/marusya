import {
  Button,
  Form,
  InputPassword,
  InputsWrapper,
  InputText,
  RHFInput,
} from '@/shared/ui';
import type { SignInFormData } from '../../model/types/SignInFormData';
import { ERRORS, REGEXP } from '@/shared/config';

export function SignInForm() {
  return (
    <Form<SignInFormData>>
      <InputsWrapper>
        <RHFInput
          rules={{
            required: ERRORS.e004,
            validate: (value) => REGEXP.email.test(value) || ERRORS.e007,
          }}
          name="email"
          component={InputText}
          componentProps={{
            placeholder: 'Электронная почта',
            type: 'email',
            icon: 'Email',
            autoComplete: 'email',
            inputMode: 'email',
          }}
        />
        <RHFInput
          rules={{ required: ERRORS.e004 }}
          name="password"
          component={InputPassword}
          componentProps={{
            placeholder: 'Пароль',
            autoComplete: 'current-password',
          }}
        />
      </InputsWrapper>
      <Button variant="primary" wide type="submit">
        Войти
      </Button>
    </Form>
  );
}
