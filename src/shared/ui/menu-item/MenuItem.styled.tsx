import styled, { css } from 'styled-components';
import { getTransition, createMq } from '@/shared/lib';
import type { MenuItemOwnProps } from './types';

const mqMainItem = createMq<MenuItemOwnProps>();

const common = css`
  cursor: pointer;

  position: relative;

  overflow-x: hidden;
  display: flex;
  column-gap: 8px;
  align-items: center;

  width: fit-content;
  min-width: 24px;
  padding: 8px 0;
  border: none;

  font-size: 24px;
  font-weight: 400;
  line-height: 1.33;
  color: ${({ theme }) => theme.colors.content.primary};
  text-decoration: none;

  background-color: transparent;

  svg {
    width: 24px;
    max-width: unset;
  }

  &::after {
    content: '';

    position: absolute;
    bottom: 0;
    left: -101%;

    display: block;

    width: 100%;
    height: 2px;

    background-color: ${({ theme }) => theme.colors.accent.secondary};

    ${getTransition([{ prop: 'transform', durationMs: 100 }])}
  }

  @media (hover: hover) {
    &:hover {
      &::after {
        transform: translateX(100%);
      }
    }
  }

  &.active {
    &::after {
      left: 0;
      ${getTransition([{ prop: 'transform', durationMs: 0 }])}
    }

    @media (hover: hover) {
      &:hover {
        &::after {
          transform: unset;
        }
      }
    }
  }

  &.noMobileActive {
    ${mqMainItem.down('lg')`
      padding: 0;

      &::after {
        content: unset;
      }
    `}
  }
`;

export const Root = styled.button<MenuItemOwnProps>`
  ${common}
`;
