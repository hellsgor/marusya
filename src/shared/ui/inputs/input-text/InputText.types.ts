import type { InputHTMLAttributes, ReactNode } from 'react';
import type { Icon } from '@/shared/ui/icon';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'email' | 'password';
  icon?: keyof typeof Icon;
  error?: string;
  rightSlotChild?: ReactNode;
}
