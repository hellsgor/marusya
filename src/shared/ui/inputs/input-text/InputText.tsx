import s from './InputText.module.scss';
import clsx from 'clsx';

import type { InputProps } from './InputText.types';

import { useEffect, useRef, useState } from 'react';

import { Icon } from '@/shared/ui/icon';
import { getCSSNumericValue } from '@/shared/lib';

export function InputText({
  type = 'text',
  icon,
  error,
  rightSlotChild,
  ...rest
}: InputProps) {
  const [displayError, setDisplayError] = useState(error);

  const errorWrapperRef = useRef<HTMLDivElement>(null);
  const errorTextRef = useRef<HTMLSpanElement>(null);

  const IconComponent = icon ? Icon[icon] : null;

  useEffect(() => {
    if (!errorWrapperRef.current || !errorTextRef.current) return;

    const wrapperTransition =
      getCSSNumericValue({
        el: errorWrapperRef.current,
        property: 'transitionDuration',
      }) +
      getCSSNumericValue({
        el: errorWrapperRef.current,
        property: 'transitionDelay',
      });

    const textTransition =
      getCSSNumericValue({
        el: errorTextRef.current,
        property: 'transitionDuration',
      }) +
      getCSSNumericValue({
        el: errorTextRef.current,
        property: 'transitionDelay',
      });

    const delay =
      wrapperTransition > textTransition ? wrapperTransition : textTransition;

    if (error) {
      setDisplayError(error);
    } else {
      const timer = setTimeout(() => setDisplayError(''), delay);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className={clsx(s.inputText, error && s.inputText_hasError)}>
      <div className={s.inputText__inner}>
        {IconComponent && (
          <div className={s.inputText__leftSlot}>
            <IconComponent />
          </div>
        )}
        <input type={type} {...rest} className={s.inputText__input} />
        {rightSlotChild && (
          <div className={s.inputText__rightSlot}>{rightSlotChild}</div>
        )}
      </div>
      <div className={s.inputText__error}>
        <div ref={errorWrapperRef}>
          <span ref={errorTextRef}>{displayError ?? ''}</span>
        </div>
      </div>
    </div>
  );
}
