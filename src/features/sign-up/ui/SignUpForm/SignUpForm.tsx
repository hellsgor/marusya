import { Button, Form, FormError, Loader } from '@/shared/ui';
import type { SignUpFormDataType } from '../../model/types/SignUpFormData';
import { useSignUpMutation } from '../../model/api/signUpApi';
import { useEffect } from 'react';
import { ERRORS } from '@/shared/config';
import { getApiErrorText } from '@/shared/lib';
import { SignUpFormFields } from '../SignUpFormFields/';

type SignUpFormProps = {
  onSuccess: () => void;
};

export function SignUpForm({ onSuccess }: SignUpFormProps) {
  const [signUp, { isLoading, isSuccess, error, data }] = useSignUpMutation();

  const errorText = getApiErrorText(error, data, {
    on400: ERRORS.e012,
    on409: ERRORS.e011,
  });

  useEffect(() => {
    if (isSuccess && onSuccess) {
      onSuccess();
    }
  }, [isSuccess, onSuccess]);

  return (
    <Form<SignUpFormDataType> onSubmit={signUp}>
      <SignUpFormFields />
      <div>
        <Button variant="primary" wide type="submit">
          {isLoading ? <Loader size="small" /> : 'Создать аккаунт'}
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
