import type { ReactNode } from 'react';
import * as S from './Card.styled';
import type { radius } from './types';

type CardProps = {
  children: ReactNode;
  radius: radius;
};

export function Card({ children, radius }: CardProps) {
  return <S.StyledCard $radius={radius}>{children}</S.StyledCard>;
}
