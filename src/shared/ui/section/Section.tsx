import type { ReactNode } from 'react';
import { Container } from '../container';
import * as S from './Section.styled';

export type SectionProps = {
  className?: string;
  children: ReactNode;
  indents?: string | [string, string];
};

export function Section({ className, children, indents }: SectionProps) {
  return (
    <S.StyledSection className={className} $indents={indents}>
      <Container>
        <S.StyledSectionWrapper>{children}</S.StyledSectionWrapper>
      </Container>
    </S.StyledSection>
  );
}
