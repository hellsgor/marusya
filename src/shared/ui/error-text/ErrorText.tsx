import { ERRORS } from '@/shared/config';
import type { HTMLAttributes } from 'react';

export type ErrorKey = keyof typeof ERRORS;
interface ErrorTextProps extends HTMLAttributes<HTMLParagraphElement> {
  errorCode: ErrorKey;
}

function getErrorText(key: ErrorKey) {
  return ERRORS[key];
}

export function ErrorText({ errorCode, ...otherProps }: ErrorTextProps) {
  return <p {...otherProps}>{getErrorText(errorCode)}</p>;
}
