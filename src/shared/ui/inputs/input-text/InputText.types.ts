import type { InputHTMLAttributes, ReactNode } from 'react';
import type { Icon } from '@/shared/ui/icon';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password' | 'search';
  icon?: keyof typeof Icon;
  error?: string;
  rightSlotChild?: ReactNode;
  isDark?: boolean;
}

export interface BaseInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>,
    Pick<InputProps, 'error' | 'isDark'> {}
