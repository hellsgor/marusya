import { forwardRef, type ChangeEvent } from 'react';
import { InputText, type BaseInputProps } from '../input-text';
import { Icon } from '../../icon';
import s from './InputSearch.module.scss';
import clsx from 'clsx';

type InputSearchProps = BaseInputProps & {
  onClear: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  (
    {
      error,
      placeholder = 'Поиск',
      value,
      onClear,
      onChange,
      className,
      ...rest
    },
    ref,
  ) => {
    const clearButton = (
      <button
        type="button"
        onClick={onClear}
        className={clsx(
          s.inputSearch__clearButton,
          value && s.inputSearch__clearButton_visible,
        )}
      >
        <Icon.Cross />
      </button>
    );

    return (
      <InputText
        ref={ref}
        type="search"
        error={error}
        icon="Search"
        placeholder={placeholder}
        className={clsx(s.inputSearch, className)}
        value={value}
        onChange={(e) => {
          onChange(e);
        }}
        rightSlotChild={clearButton}
        {...rest}
      />
    );
  },
);
