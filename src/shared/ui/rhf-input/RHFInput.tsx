import type { ComponentType } from 'react';
import {
  useFormContext,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from 'react-hook-form';

type RHFInputProps<T extends FieldValues, P extends { error?: string }> = {
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
  component: ComponentType<P>;
  componentProps: Omit<
    P,
    'value' | 'onChange' | 'ref' | 'error' | 'name' | 'onBlur'
  >;
};

export function RHFInput<T extends FieldValues, P extends { error?: string }>({
  name,
  rules,
  component: Component,
  componentProps,
}: RHFInputProps<T, P>) {
  const { register, getFieldState, formState, clearErrors } =
    useFormContext<T>();
  const { error: fieldError } = getFieldState(name, formState);

  const handleFocus = () => {
    if (fieldError) {
      clearErrors(name);
    }
  };

  return (
    <Component
      {...(componentProps as P)}
      {...register(name, rules)}
      error={fieldError?.message}
      onFocus={handleFocus}
    />
  );
}
