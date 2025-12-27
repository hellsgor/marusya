import type { SignUpFormDataType } from '../../model/SignUpFormData';

import { useFormContext } from 'react-hook-form';

import {
  ERRORS,
  MIN_INPUT_LENGTH,
  MIN_PASSWORD_LENGTH,
  REGEXP,
} from '@/shared/config';
import { InputPassword, InputsWrapper, InputText, RHFInput } from '@/shared/ui';

export function SignUpFormFields() {
  const { watch } = useFormContext<SignUpFormDataType>();
  const password = watch('password');

  return (
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
        rules={{
          required: ERRORS.e004,
          validate: (value) =>
            value.length >= MIN_INPUT_LENGTH ||
            `${ERRORS.e010}${MIN_INPUT_LENGTH}`,
        }}
        name="name"
        component={InputText}
        componentProps={{
          placeholder: 'Имя',
          icon: 'User',
          autoComplete: 'given-name',
        }}
      />
      <RHFInput
        rules={{
          required: ERRORS.e004,
          validate: (value) =>
            value.length >= MIN_INPUT_LENGTH ||
            `${ERRORS.e010}${MIN_INPUT_LENGTH}`,
        }}
        name="surname"
        component={InputText}
        componentProps={{
          placeholder: 'Фамилия',
          icon: 'User',
          autoComplete: 'family-name',
        }}
      />
      <RHFInput
        rules={{
          required: ERRORS.e004,
          validate: (value) =>
            value.length >= MIN_PASSWORD_LENGTH ||
            `${ERRORS.e010}${MIN_PASSWORD_LENGTH}`,
        }}
        name="password"
        component={InputPassword}
        componentProps={{
          placeholder: 'Пароль',
          autoComplete: 'new-password',
        }}
      />
      <RHFInput
        rules={{
          required: ERRORS.e004,
          validate: (value) => value === password || ERRORS.e009,
        }}
        name="confirmPassword"
        component={InputPassword}
        componentProps={{
          placeholder: 'Подтвердите пароль',
          autoComplete: 'new-password',
        }}
      />
    </InputsWrapper>
  );
}
