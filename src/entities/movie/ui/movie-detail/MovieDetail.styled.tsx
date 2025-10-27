import { StyledButton } from '@/shared/ui/button';
import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  column-gap: 32px;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    flex-direction: column-reverse;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  padding-top: 74px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    row-gap: 32px;
    padding-block: 24px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    row-gap: 12px;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
`;

export const Description = styled.p`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.content.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 18px;
  }
`;

export const MetaWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  align-items: center;
`;

export const MetaItem = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.content.secondary};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    font-size: 14px;
    line-height: 1.4287;
  }
`;

export const TrailerButton = styled(StyledButton)`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    width: 100%;
    max-width: 260px;
  }
`;

export const FavoriteButton = styled(StyledButton)<{
  $isFavoriteMovie?: boolean;
}>`
  ${({ $isFavoriteMovie, theme }) => css`
    svg {
      fill: ${$isFavoriteMovie ? theme.colors.accent.active : 'transparent'};
      stroke: ${$isFavoriteMovie
        ? theme.colors.accent.active
        : theme.colors.content.primary};
    }
  `}

  @media (hover: hover) {
    &:hover {
      svg {
        fill: ${({ $isFavoriteMovie, theme }) =>
          $isFavoriteMovie ? theme.colors.accent.active : 'transparent'};
        stroke: ${({ theme }) => theme.colors.accent.active};
      }
    }
  }
`;

export const PosterWrapper = styled.div`
  overflow: hidden;
  flex: 0 0 53.125%;
  height: 552px;
  border-radius: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
    flex-basis: 260px;
    width: 100%;
  }
`;
