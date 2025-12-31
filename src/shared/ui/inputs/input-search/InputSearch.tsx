import { forwardRef } from 'react';
import { InputText, type BaseInputProps } from '../input-text';

type InputSearchProps = BaseInputProps;

export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ error, placeholder = 'Поиск', ...rest }, ref) => {
    return (
      <InputText
        ref={ref}
        type="search"
        error={error}
        icon="Search"
        placeholder={placeholder}
        {...rest}
      />
    );
  },
);
