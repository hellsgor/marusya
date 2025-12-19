import {
  Button,
  Form,
  FormError,
  InputPassword,
  InputsWrapper,
  InputText,
  Loader,
  RHFInput,
} from '@/shared/ui';
import { ERRORS, REGEXP } from '@/shared/config';
import { useFormMutation } from '@/shared/lib';

import type { SignInFormDataType } from '../../model/SignInFormData';
import { useSignInMutation } from '../../api/signInApi';

type SignInFormProps = {
  onSuccess?: () => void;
};

export function SignInForm({ onSuccess }: SignInFormProps) {
  const { isLoading, errorText, mutate } = useFormMutation(
    useSignInMutation(),
    {
      onSuccess,
      errorOptions: {
        on400: ERRORS.e005,
      },
    },
  );

  return (
    <Form<SignInFormDataType> onSubmit={mutate}>
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
      <div>
        <Button variant="primary" wide type="submit">
          {isLoading ? <Loader size="small" /> : 'Войти'}
        </Button>
        <FormError
          text={errorText}
          textStyle={{
            textAlign: 'center',
            width: '100%',
            paddingTop: '8px',
          }}
        />
      </div>
    </Form>
  );
}
