import {
  forwardRef,
  memo,
  useRef,
  type ComponentType,
  type InputHTMLAttributes,
  type ReactNode,
  type SVGProps,
} from 'react';
import st from './TextInput.module.scss';
import clsx from 'clsx';

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: 'light' | 'dark';
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  error?: string | Error;
  className?: string;
  rightSlot?: ReactNode;
}

export const TextInput = memo(
  forwardRef<HTMLInputElement, TextInputProps>(function TextInput(
    { theme = 'dark', icon: Icon, error, className, rightSlot, ...props },
    inputRef,
  ) {
    const ref = useRef<HTMLInputElement>(null);

    return (
      <div
        ref={ref}
        className={clsx(
          st.textInput,
          st[`textInput_${theme}`],
          error && st.error,
          className,
        )}
      >
        <input ref={inputRef} {...props} />
        {Icon && (
          <div className={st.icon}>{<Icon width={24} height={24} />}</div>
        )}
        {rightSlot && <div className={st.rightSlot}>{rightSlot}</div>}
        {error && <p>{typeof error === 'string' ? error : error.message}</p>}
      </div>
    );
  }),
);
