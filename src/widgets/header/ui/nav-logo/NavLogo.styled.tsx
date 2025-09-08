import { createMq } from '@/shared/lib';
import { NavLink } from 'react-router';
import styled from 'styled-components';

const mqLogo = createMq<Record<string, unknown>>();

export const StyledLogo = styled(NavLink)`
  ${mqLogo.down('lg')`
    margin-right: auto;
  `}
`;
