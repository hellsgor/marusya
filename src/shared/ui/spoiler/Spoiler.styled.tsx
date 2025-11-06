import styled, { css } from 'styled-components';
import { StyledButton } from '../button';
import { getTransition } from '@/shared/lib';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

export const Wrap = styled.div<{ $isCollapsed: boolean | null; $rows: number }>`
  overflow: hidden;
  min-height: ${({ $isCollapsed, $rows }) =>
    $isCollapsed === null ? 'unset' : `${$rows}lh`};
  ${css`
    ${getTransition([{ prop: 'max-height' }])}
  `}
`;

export const Button = styled(StyledButton)`
  color: ${({ theme }) => theme.colors.accent.primary.static};

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.accent.primary.hover};
    }
  }
`;
