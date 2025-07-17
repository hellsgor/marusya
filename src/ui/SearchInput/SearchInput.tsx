import { memo, useRef, useState, type ChangeEvent } from 'react';

import { TextInput, type TextInputProps } from '../TextInput/TextInput';

import clsx from 'clsx';
import st from './SearchInput.module.scss';

import { Cross, SearchIcon } from '../icons';

type SearchInputProps = Omit<TextInputProps, 'icon' | 'type' | 'rightSlot'> & {
  clearButtonCallback?: () => void;
};

export const SearchInput = memo(function SearchInput({
  theme = 'dark',
  className,
  error,
  clearButtonCallback,
  ...props
}: SearchInputProps) {
  const [value, setValue] = useState(props.value?.toString() || '');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearButtonClick = () => {
    setValue('');

    if (props.onChange) {
      const fakeEvent = {
        target: { value: '' },
        currentTarget: { value: '' },
      } as unknown as ChangeEvent<HTMLInputElement>;
      props.onChange(fakeEvent);
    }

    if (clearButtonCallback) clearButtonCallback();
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onChange?.(event);
  };

  return (
    <TextInput
      {...props}
      ref={inputRef}
      value={value}
      onChange={handleInputChange}
      theme={theme}
      className={clsx(st.searchInput, className ?? null)}
      type="search"
      icon={SearchIcon}
      error={error}
      autoComplete="off"
      rightSlot={
        <button
          className={st.searchInput__clearButton}
          type="button"
          onClick={handleClearButtonClick}
          style={{ opacity: `${value ? 1 : 0}` }}
        >
          <Cross width={24} height={24} />
        </button>
      }
    />
  );
});
