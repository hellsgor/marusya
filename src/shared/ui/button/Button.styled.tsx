import { createMq, getTransition } from '@/shared/lib';
import styled, { css } from 'styled-components';
import type { ButtonOwnProps, ButtonVariants } from './types';

const mqBtn = createMq<ButtonOwnProps>();

const primary = css`
  color: ${({ theme }) => theme.colors.content.primary};
  background-color: ${({ theme }) => theme.colors.accent.primary.static};

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.accent.primary.hover};
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.content.disabled};
    background-color: ${({ theme }) => theme.colors.accent.primary.disabled};
  }
`;

const secondary = css`
  border: 1px solid ${({ theme }) => theme.colors.content.placeholder};
  color: ${({ theme }) => theme.colors.content.primary};
  background-color: ${({ theme }) => theme.colors.bg.secondary.static};

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme }) => theme.colors.content.black};
      color: ${({ theme }) => theme.colors.content.black};
      background-color: ${({ theme }) => theme.colors.bg.white};
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.content.disabled};
    background-color: ${({ theme }) => theme.colors.bg.secondary.disabled};
  }
`;

const ghost = css`
  padding: 0;
  color: ${({ theme }) => theme.colors.content.black};
  background-color: transparent;

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.accent.primary.static};
    }
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.accent.primary.disabled};
  }
`;

const byVariant: Record<ButtonVariants, ReturnType<typeof css>> = {
  primary,
  secondary,
  ghost,
};

export const Root = styled.button<ButtonOwnProps>`
  cursor: pointer;

  display: flex;
  column-gap: 12px;
  align-items: center;
  justify-content: center;

  width: ${({ $wide }) => ($wide ? '100%' : 'fit-content')};
  padding: ${({ $smallPaddings }) =>
    $smallPaddings ? '16px 21px' : '16px 48px'};
  border: none;
  border-radius: 28px;

  font-family: Play, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.33;

  ${getTransition([
    { prop: 'color' },
    { prop: 'background-color' },
    { prop: 'border-color' },
  ])}

  svg {
    width: 24px;
    max-width: unset;
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({ $variant }) => byVariant[$variant ?? 'primary']}

  ${mqBtn.down('md')`
    padding-left: 12px;
    padding-right: 12px;
  `}
`;
