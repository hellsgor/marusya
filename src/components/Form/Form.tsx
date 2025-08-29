import {
  FormProvider,
  useForm,
  type FieldValues,
  type SubmitHandler,
  type UseFormReturn,
} from 'react-hook-form';

import type { ReactNode } from 'react';
import type { ERRORS_TEXTS } from '../../constants';

import st from './Form.module.scss';

import { Button } from '../../ui/Button/Button';
import { Loader } from '../../ui/Loader/Loader';
import { ErrorText } from '../../ui/ErrorText/ErrorText';
import { getServerErrorKey } from '../../helpers/getServerErrorKey';

type FormProps<TValues extends FieldValues> = {
  children: ReactNode;
  onSubmit: SubmitHandler<TValues>;
  afterSuccess?: () => void;
  isSubmitting: boolean;
  submitButtonText: string;
  errorStatusCode?: number | undefined;
  beforeSubmit?: (
    vals: TValues,
    methods: UseFormReturn<TValues>,
  ) => boolean | Promise<boolean>;
};

export function Form<TValues extends FieldValues>({
  children,
  onSubmit,
  afterSuccess,
  isSubmitting,
  submitButtonText,
  errorStatusCode,
  beforeSubmit,
}: FormProps<TValues>) {
  const methods = useForm<TValues>();
  const { handleSubmit, reset } = methods;

  const handle: SubmitHandler<TValues> = async (vals) => {
    if (beforeSubmit) {
      const ok = await beforeSubmit(vals, methods);
      if (!ok) return;
    }

    await onSubmit(vals);
    afterSuccess?.();
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={handleSubmit(handle)} className={st.form}>
        <div className={st.form__inputs}>{children}</div>

        <Button wide={true} type="submit">
          {isSubmitting ? <Loader size="small"></Loader> : submitButtonText}
        </Button>

        {errorStatusCode && (
          <ErrorText
            errorKey={getServerErrorKey(errorStatusCode)}
            className={st.form__error}
          />
        )}
      </form>
    </FormProvider>
  );
}
