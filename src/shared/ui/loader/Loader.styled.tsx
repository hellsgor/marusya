import styled, { keyframes } from 'styled-components';
import type { LoaderSize } from './types';

const spin = keyframes`
  to {transform: rotate(1turn)};
`;

export const StyledLoader = styled.div<{ $size: LoaderSize; $fixed: boolean }>`
  ${({ $fixed }) =>
    $fixed &&
    `
    position: fixed;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
  `}
  display: grid;

  aspect-ratio: 1/1;
  width: ${({ $size }) =>
    (() => {
      switch ($size) {
        case 'big':
          return 100;
        case 'small':
          return 24;
        default:
          return 50;
      }
    })()}px;
  margin: auto;

  animation: ${spin} 4s infinite;

  &::before,
  &::after {
    content: '';

    grid-area: 1/1;

    width: 100%;
    border-color: ${({ theme }) =>
      `${theme.colors.accent.secondary} ${theme.colors.accent.secondary} transparent transparent`};
    border-style: solid;
    border-width: ${({ $size }) =>
      (() => {
        switch ($size) {
          case 'big':
            return 4;
          case 'small':
            return 1;
          default:
            return 2;
        }
      })()}px;
    border-radius: 50%;

    mix-blend-mode: darken;

    animation: ${spin} 1s infinite linear;
  }

  &::after {
    border-color: ${({ theme }) =>
      `transparent transparent ${theme.colors.accent.primary.static} ${theme.colors.accent.primary.static}`};
    animation-direction: reverse;
  }
`;
