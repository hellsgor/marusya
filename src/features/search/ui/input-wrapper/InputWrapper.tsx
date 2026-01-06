import s from './InputWrapper.module.scss';

import { forwardRef, useRef } from 'react';
import type { ChangeEvent } from 'react';

import { useMergeRefs } from '@/shared/lib';

import { InputSearch, Loader } from '@/shared/ui';

type InputWrapperProps = {
  error?: string;
  isSearching: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
  value: string;
};

export const InputWrapper = forwardRef<HTMLInputElement, InputWrapperProps>(
  function InputWrapper({ error, isSearching, onChange, onClear, value }, ref) {
    const inputRef = useRef<HTMLInputElement>(null);

    const mergedRefs = useMergeRefs(ref, inputRef);

    return (
      <div className={s.inputWrapper}>
        <InputSearch
          className={s.inputWrapper__input}
          ref={mergedRefs}
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
  },
);

InputWrapper.displayName = 'InputWrapper';
