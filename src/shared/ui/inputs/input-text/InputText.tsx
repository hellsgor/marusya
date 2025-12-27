import s from './InputText.module.scss';
import clsx from 'clsx';

import type { InputProps } from './InputText.types';

import { forwardRef } from 'react';

import { FormError } from '@/shared/ui/form-error';
import { Icon } from '@/shared/ui/icon';

export const InputText = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', icon, error, rightSlotChild, ...rest }, ref) => {
    const IconComponent = icon ? Icon[icon] : null;

    return (
      <div className={clsx(s.inputText, error && s.inputText_hasError)}>
        <div className={s.inputText__inner}>
          {IconComponent && (
            <div className={s.inputText__leftSlot}>
              <IconComponent />
            </div>
          )}
          <input
            ref={ref}
            type={type}
            className={s.inputText__input}
            {...rest}
          />
          {rightSlotChild && (
            <div className={s.inputText__rightSlot}>{rightSlotChild}</div>
          )}
        </div>
        <FormError text={error} />
      </div>
    );
  },
);

InputText.displayName = 'InputText';
