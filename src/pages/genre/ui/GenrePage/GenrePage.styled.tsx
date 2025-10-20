import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
    row-gap: 40px;
  }
`;

export const StyledMovieWrapper = styled.div`
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
