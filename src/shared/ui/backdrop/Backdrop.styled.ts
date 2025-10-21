import { getTransition } from '@/shared/lib';
import styled from 'styled-components';

export const Root = styled.div<{ $visible: boolean; $zIndex: number }>`
  pointer-events: none;

  z-index: ${({ $zIndex }) => $zIndex};

  width: 100%;
  height: 100%;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  background-color: ${({ theme }) => theme.colors.bg.backdrop};
  ${getTransition([{ prop: 'opacity' }])}
`;
