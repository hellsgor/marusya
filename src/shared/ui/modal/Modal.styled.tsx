import styled, { createGlobalStyle, css } from 'styled-components';
import type { ModalType } from './type';

export const GlobalScrollLock = createGlobalStyle`
  body {
    overflow-y: hidden;
  }
`;

const opacity = css<{ $isVisible?: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  transition: opacity
    ${({ theme }) => `${theme.transition.func} ${theme.transition.duration}ms`};
`;

export const Root = styled.div<{ $isVisible: boolean }>`
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};

  position: fixed;
  z-index: 10;
  inset: 0;

  color: ${({ theme }) => theme.colors.content.black};
`;

export const Backdrop = styled.div<{ $type: ModalType; $isVisible?: boolean }>`
  position: absolute;
  z-index: -1;
  inset: 0;
  background-color: ${({ $type, theme }) => {
    switch ($type) {
      case 'trailer':
        return theme.colors.bg.backdrop.tailer;
      default:
        return theme.colors.bg.backdrop.default;
    }
  }};
  ${opacity};
`;

export const Inner = styled.div<{ $isVisible?: boolean }>`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;
  ${opacity}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    padding: 0 20px;
  }
`;

export const Body = styled.div<{ $type: ModalType }>`
  position: relative;
  ${({ $type }) =>
    $type === 'trailer'
      ? css`
          aspect-ratio: 960/540;
          width: ${(960 / 1440) * 100}vw;
          max-width: 960px;
          background-color: ${({ theme }) => theme.colors.bg.secondary.static};
        `
      : css`
          width: 100%;
          max-width: 420px;
          height: fit-content;
          padding: 64px 40px;
          border-radius: 24px;

          background-color: ${({ theme }) => theme.colors.bg.white};

          @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
            margin: 80px 0 auto;
            padding: 64px 20px 32px;
          }
        `};
`;

export const BodyInner = styled.div<{ $type: ModalType }>`
  ${({ $type }) =>
    $type === 'trailer'
      ? null
      : css`
          display: flex;
          flex-direction: column;
          row-gap: 40px;
          align-items: center;
        `}
  overflow: hidden;
  width: 100%;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    row-gap: 32px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  left: calc(100% + 24px);

  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  aspect-ratio: 1/1;
  width: 48px;
  border-radius: 50%;

  color: ${({ theme }) => theme.colors.content.black};

  background-color: ${({ theme }) => theme.colors.bg.white};

  transition: color
    ${({ theme }) => `${theme.transition.func} ${theme.transition.duration}ms`};

  svg {
    aspect-ratio: 1/1;
    width: 24px;
  }

  @media (hover: hover) {
    &:hover {
      color: ${({ theme }) => theme.colors.accent.primary.hover};
    }
  }

  &:active {
    color: ${({ theme }) => theme.colors.accent.primary.disabled};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    top: 8px;
    right: 8px;
    left: unset;
  }
`;
