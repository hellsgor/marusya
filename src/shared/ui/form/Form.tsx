import type { ReactNode } from 'react';
import s from './Form.module.scss';
import {
  FormProvider,
  useForm,
  type FieldValues,
  type SubmitHandler,
} from 'react-hook-form';

type FormProps<T extends FieldValues> = {
  children: ReactNode;
  onSubmit: SubmitHandler<T>;
};

export function Form<T extends FieldValues>({
  children,
  onSubmit,
}: FormProps<T>) {
  const methods = useForm<T>({ shouldFocusError: false });
  const { handleSubmit } = methods;

  const submit: SubmitHandler<T> = (data) => {
    onSubmit(data);
  };
  return (
    <FormProvider {...methods}>
      <form className={s.form} onSubmit={handleSubmit(submit)} noValidate>
        {children}
      </form>
    </FormProvider>
  );
}
