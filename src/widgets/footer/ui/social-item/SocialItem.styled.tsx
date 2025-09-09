import styled from 'styled-components';
import type { SocialItemStyled } from './types';
import { createMq, getTransition } from '@/shared/lib';

const mqRoot = createMq<SocialItemStyled>();

export const Root = styled.a<SocialItemStyled>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  aspect-ratio: 1/1;
  border: 1px solid ${({ theme }) => theme.colors.content.thirdly};
  color: ${({ theme }) => theme.colors.content.thirdly};
  background-color: transparent;
  border-radius: 8px;

  ${getTransition([{ prop: 'color' }, { prop: 'border-color' }])};

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.accent.active};
      border-color: ${({ theme }) => theme.colors.accent.active};
    }
  }

  ${mqRoot.down('md')`
    width: 24px;
  `}
`;
