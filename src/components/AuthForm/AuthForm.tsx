import st from './AuthForm.module.scss';

import type { LoginModel } from '../../models/User';
import { Button } from '../../ui/Button/Button';
import { TextInput } from '../../ui/TextInput/TextInput';
import { EmailIcon, Password } from '../../ui/icons';

import { useForm, type SubmitHandler } from 'react-hook-form';
import { ERRORS_TEXTS } from '../../constants';

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginModel>();

  const onSubmit: SubmitHandler<LoginModel> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={st.authForm}>
      <div className={st.authForm__inputs}>
        <TextInput
          placeholder="Электронная почта"
          theme="light"
          icon={EmailIcon}
          {...register('email', { required: true })}
          error={
            errors.email?.type === 'required' ? ERRORS_TEXTS.e004 : undefined
          }
        />
        <TextInput
          placeholder="Пароль"
          theme={'light'}
          icon={Password}
          type="password"
          {...register('password', { required: true })}
          error={
            errors.password?.type === 'required' ? ERRORS_TEXTS.e004 : undefined
          }
        />
      </div>
      <Button wide={true} type="submit">
        Войти
      </Button>
    </form>
  );
}
