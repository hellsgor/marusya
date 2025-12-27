import s from './PageError.module.scss';

import type { ErrorKey } from '@/shared/ui/error-text';

import { ErrorText } from '@/shared/ui/error-text';

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
