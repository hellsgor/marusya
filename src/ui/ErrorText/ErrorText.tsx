import { getErrorText } from '../../helpers/getErrorText';

type ErrorKey = Parameters<typeof getErrorText>[0];

export function ErrorText({ errorKey }: { errorKey: ErrorKey }) {
  return <span>{getErrorText(errorKey)}</span>;
}
