import styled, { css } from 'styled-components';
import { getTransition } from '@/shared/lib';
import { StyledButton } from '../button';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Content = styled.div<{
  $isExpanded: boolean;
  $hasTransition: boolean;
}>`
  overflow: hidden;
  display: grid;
  grid-template-rows: ${({ $isExpanded }) => ($isExpanded ? '1fr' : '0fr')};
  min-height: 0;

  ${({ $hasTransition }) =>
    $hasTransition &&
    css`
      ${getTransition([{ prop: 'grid-template-rows' }])}
    `}
`;

export const ContentWrapper = styled.div`
  min-height: 0;
`;

export const Button = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.accent.primary.static};

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.accent.primary.hover};
    }
  }
`;
