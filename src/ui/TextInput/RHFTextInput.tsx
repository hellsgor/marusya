import {
  useFormContext,
  type FieldValues,
  type Path,
  type RegisterOptions,
} from 'react-hook-form';
import { TextInput, type TextInputProps } from './TextInput';

type RHFTextInputProps<T extends FieldValues> = {
  name: Path<T>;
  rules?: RegisterOptions<T, Path<T>>;
} & Omit<TextInputProps, 'value' | 'onChange' | 'ref'>;

export function RHFTextInput<T extends FieldValues>({
  name,
  rules,
  ...rest
}: RHFTextInputProps<T>) {
  const { register, getFieldState, formState } = useFormContext<T>();

  const { error: fieldError } = getFieldState(name, formState);
  const error = fieldError?.message || undefined;

  return <TextInput {...rest} {...register(name, rules)} error={error} />;
}
