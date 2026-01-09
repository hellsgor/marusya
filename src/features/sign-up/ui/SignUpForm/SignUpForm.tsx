import type { SignUpFormDataType } from '../../model/SignUpFormData';

import { ERRORS } from '@/shared/config';
import { useFormMutation } from '@/shared/lib';
import { Button, Form, FormError, Loader } from '@/shared/ui';
import { useSignUpMutation } from '../../api/signUpApi';
import { SignUpFormFields } from '../SignUpFormFields/';

type SignUpFormProps = {
  onSuccess: () => void;
};

export function SignUpForm({ onSuccess }: SignUpFormProps) {
  const { isLoading, errorText, mutate } = useFormMutation(
    useSignUpMutation(),
    {
      onSuccess,
      errorOptions: {
        on400: ERRORS.e012,
        on409: ERRORS.e011,
      },
    },
  );

  return (
    <Form<SignUpFormDataType> onSubmit={mutate}>
      <SignUpFormFields />
      <div>
        <Button variant="primary" wide type="submit">
          {isLoading ? <Loader size="small" /> : 'Создать аккаунт'}
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
