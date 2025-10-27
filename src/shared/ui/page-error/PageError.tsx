import * as S from './PageError.styled';
import { ErrorText, type ErrorKey } from '../error-text';

type PageErrorProps = {
  errorCode: ErrorKey;
  backdropText?: string;
};

export function PageError({ errorCode, backdropText }: PageErrorProps) {
  return (
    <S.Root $isTopIndent={!!backdropText}>
      {backdropText && <S.Backdrop>{backdropText}</S.Backdrop>}
      <ErrorText errorCode={errorCode} />
    </S.Root>
  );
}
