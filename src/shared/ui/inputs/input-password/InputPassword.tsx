import type { InputProps } from '@/shared/ui/inputs/input-text';
import type { InputHTMLAttributes } from 'react';

import { useState, forwardRef } from 'react';

import { Icon } from '@/shared/ui/icon';
import { InputText } from '@/shared/ui/inputs/input-text';

interface InputPasswordProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    Pick<InputProps, 'error'> {}

export const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(
  ({ error, ...rest }, ref) => {
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
        ref={ref}
        type={type}
        error={error}
        icon="Password"
        rightSlotChild={eyeButton}
        {...rest}
      />
    );
  },
);
