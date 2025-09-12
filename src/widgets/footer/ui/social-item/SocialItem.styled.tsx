import styled from 'styled-components';
import type { SocialItemStyled } from './types';
import { createMq, getTransition } from '@/shared/lib';

const mqRoot = createMq<SocialItemStyled>();

export const Root = styled.a<SocialItemStyled>`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  width: 36px;
  border: 1px solid ${({ theme }) => theme.colors.content.thirdly};
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.content.thirdly};

  background-color: transparent;

  ${getTransition([{ prop: 'color' }, { prop: 'border-color' }])};

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.accent.active};
      color: ${({ theme }) => theme.colors.accent.active};
    }
  }

  ${mqRoot.down('md')`
    width: 24px;
    height: 24px;
  `}
`;
