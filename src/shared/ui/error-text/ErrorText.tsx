import { ERRORS } from '@/shared/config';

type ErrorKey = keyof typeof ERRORS;
type ErrorTextProps = { errorCode: ErrorKey };

function getErrorText(key: ErrorKey) {
  return ERRORS[key];
}

export function ErrorText({ errorCode }: ErrorTextProps) {
  return <p>{getErrorText(errorCode)}</p>;
}
