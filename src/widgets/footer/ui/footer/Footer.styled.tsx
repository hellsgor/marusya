import { createMq } from '@/shared/lib';
import type { HTMLAttributes } from 'react';
import styled from 'styled-components';

const wrapperMq = createMq<HTMLAttributes<HTMLDivElement>>();

export const StyledFooterWrapper = styled.div`
  display: flex;
  column-gap: 80px;
  justify-content: flex-end;
  padding: 40px 0;

  ${wrapperMq.down('md')`
    justify-content: flex-start;
  `}
`;

export const StyledSocialsList = styled.ul.attrs((props) => ({
  role: props.role || 'list',
}))<HTMLAttributes<HTMLUListElement>>`
  display: flex;
  column-gap: 24px;
  align-items: center;
`;
