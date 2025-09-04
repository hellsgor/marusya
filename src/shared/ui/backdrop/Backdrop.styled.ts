import { getTransition } from '@/shared/lib';
import styled from 'styled-components';

export const Root = styled.div<{ $visible: boolean; $zIndex: number }>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.bg.backdrop};

  pointer-events: none;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  ${getTransition([{ prop: 'opacity' }])}

  z-index: ${({ $zIndex }) => $zIndex};
`;
