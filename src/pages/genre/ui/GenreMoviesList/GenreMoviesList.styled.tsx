import { StyledButton } from '@/shared/ui/button';
import styled from 'styled-components';

export const StyledGenreMoviesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 64px 40px;
  justify-content: space-between;

  & > * {
    flex: 1 0 224px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    gap: 40px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    row-gap: 24px;
    justify-content: center;

    & > * {
      flex: 0 1 335px;
    }
  }
`;

export const StyledShowMoreButton = styled(StyledButton)`
  align-self: center;
  min-width: 218px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: min(100%, 335px);
  }
`;
