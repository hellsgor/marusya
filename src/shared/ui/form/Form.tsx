import type { ReactNode } from 'react';
import s from './Form.module.scss';
import {
  FormProvider,
  useForm,
  type FieldValues,
  type SubmitHandler,
} from 'react-hook-form';

type FormProps = {
  children: ReactNode;
};

export function Form<T extends FieldValues>({ children }: FormProps) {
  const methods = useForm<T>({ shouldFocusError: false });
  const { handleSubmit } = methods;

  const submit: SubmitHandler<T> = (data) => {
    console.log(data);
  };
  return (
    <FormProvider {...methods}>
      <form className={s.form} onSubmit={handleSubmit(submit)} noValidate>
        {children}
      </form>
    </FormProvider>
  );
}
