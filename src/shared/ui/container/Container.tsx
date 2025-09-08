import type { ContainerProps } from './types';
import * as S from './Container.styled';

export function Container({ children, ...rest }: ContainerProps) {
  return <S.Root {...rest}>{children}</S.Root>;
}
