import s from './InputWrapper.module.scss';

import { useRef, type ChangeEvent } from 'react';

import { InputSearch, Loader } from '@/shared/ui';

type InputWrapperProps = {
  error?: string;
  isSearching: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  value: string;
};

export function InputWrapper({
  error,
  isSearching,
  onChange,
  onClear,
  value,
}: InputWrapperProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={s.inputWrapper}>
      <InputSearch
        className={s.inputWrapper__input}
        ref={inputRef}
        name="search"
        autoComplete="off"
        value={value}
        onClear={() => {
          onClear();
          if (inputRef?.current) {
            inputRef.current.focus();
          }
        }}
        onChange={onChange}
        isDark
        error={error}
      />
      {isSearching && (
        <Loader className={s.inputWrapper__loader} size="small" />
      )}
    </div>
  );
}
