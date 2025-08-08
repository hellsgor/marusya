import {
  FormProvider,
  useForm,
  type FieldValues,
  type SubmitHandler,
} from 'react-hook-form';

import type { ReactNode } from 'react';
import type { ERRORS_TEXTS } from '../../constants';

import st from './Form.module.scss';

import { Button } from '../../ui/Button/Button';
import { Loader } from '../../ui/Loader/Loader';
import { ErrorText } from '../../ui/ErrorText/ErrorText';

type FormProps<TValues extends FieldValues> = {
  children: ReactNode;
  onSubmit: SubmitHandler<TValues>;
  afterSuccess?: () => void;
  isSubmitting: boolean;
  submitButtonText: string;
  serverErrorKey?: keyof typeof ERRORS_TEXTS | undefined;
};

export function Form<TValues extends FieldValues>({
  children,
  onSubmit,
  afterSuccess,
  isSubmitting,
  submitButtonText,
  serverErrorKey,
}: FormProps<TValues>) {
  const methods = useForm<TValues>();
  const { handleSubmit, reset } = methods;

  const handle: SubmitHandler<TValues> = async (vals) => {
    await onSubmit(vals);
    afterSuccess?.();
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handle)} className={st.form}>
        <div className={st.form__inputs}>{children}</div>

        <Button wide={true} type="submit">
          {isSubmitting ? <Loader size="small"></Loader> : submitButtonText}
        </Button>

        {serverErrorKey && (
          <ErrorText errorKey={serverErrorKey} className={st.form__error} />
        )}
      </form>
    </FormProvider>
  );
}
