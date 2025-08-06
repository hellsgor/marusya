import clsx from 'clsx';
import { getErrorText } from '../../helpers';

type ErrorKey = Parameters<typeof getErrorText>[0];

interface ErrorTextProps {
  errorKey: ErrorKey;
  className?: string;
}

export function ErrorText({ errorKey, className }: ErrorTextProps) {
  return <span className={clsx(className)}>{getErrorText(errorKey)}</span>;
}
