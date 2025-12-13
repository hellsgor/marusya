import { Icon } from '@/shared/ui/icon';
import { InputText } from '../input-text';
import type { InputProps } from '../input-text';
import { useState, type InputHTMLAttributes } from 'react';

interface InputPasswordProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    Pick<InputProps, 'error'> {}

export function InputPassword({ error, ...rest }: InputPasswordProps) {
  const [type, setType] = useState<'text' | 'password'>('password');
  const eyeButton = (
    <button
      type="button"
      onClick={() =>
        setType((state) => (state === 'text' ? 'password' : 'text'))
      }
    >
      {type === 'password' ? <Icon.EyeSlash /> : <Icon.Eye />}
    </button>
  );

  return (
    <InputText
      type={type}
      error={error}
      icon="Password"
      rightSlotChild={eyeButton}
      {...rest}
    />
  );
}
