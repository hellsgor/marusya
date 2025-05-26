import {
  memo,
  useRef,
  type ComponentType,
  type InputHTMLAttributes,
  type SVGProps,
} from 'react';
import st from './TextInput.module.scss';
import clsx from 'clsx';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: 'light' | 'dark';
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  error?: Error;
  className?: string;
}

export const TextInput = memo(function TextInput({
  theme = 'dark',
  className,
  icon: Icon,
  error,
  ...props
}: TextInputProps) {
  const ref = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    if (ref.current) {
      ref.current.classList.remove(st.error);
    }
  };

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
      <input onFocus={handleFocus} {...props} />
      {Icon && <div className={st.icon}>{<Icon width={24} height={24} />}</div>}
      {error && <p>{error?.message}</p>}
    </div>
  );
});
