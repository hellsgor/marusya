import s from './PageError.module.scss';
import { ErrorText, type ErrorKey } from '../error-text';

type PageErrorProps = {
  errorCode: ErrorKey;
  backdropText?: string;
};

export function PageError({ errorCode, backdropText }: PageErrorProps) {
  return (
    <div className={s.pageError}>
      {backdropText && <span>{backdropText}</span>}
      <ErrorText errorCode={errorCode} />
    </div>
  );
}
