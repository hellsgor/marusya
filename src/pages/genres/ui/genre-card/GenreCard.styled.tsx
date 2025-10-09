import { StyledCard } from '@/shared/ui/card';
import styled from 'styled-components';

export const StyledGenreCard = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTitle = styled.h3`
  display: block;

  width: 100%;
  padding: 22px 0 30px;

  color: ${({ theme }) => theme.colors.content.primary};
  text-align: center;

  background-color: ${({ theme }) => theme.colors.bg.preBlack};
`;
