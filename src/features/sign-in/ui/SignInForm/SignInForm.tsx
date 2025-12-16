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
import type { SignInFormDataType } from '../../model/types/SignInFormData';
import { ERRORS, REGEXP } from '@/shared/config';
import { useSignInMutation } from '../../model/api/signInApi';
import { useEffect } from 'react';
import { getApiErrorText } from '@/shared/lib';

type SignInFormProps = {
  onSuccess?: () => void;
};

export function SignInForm({ onSuccess }: SignInFormProps) {
  const [signIn, { isLoading, isSuccess, error }] = useSignInMutation();

  const errorText = getApiErrorText(error, undefined, {
    on400: ERRORS.e005,
  });

  useEffect(() => {
    if (isSuccess && onSuccess) {
      onSuccess();
    }
  }, [isSuccess, onSuccess]);

  return (
    <Form<SignInFormDataType> onSubmit={signIn}>
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
          text={!isLoading && error ? errorText : undefined}
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
