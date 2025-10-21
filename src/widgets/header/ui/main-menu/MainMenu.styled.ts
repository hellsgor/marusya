import { createMq } from '@/shared/lib';
import type { HTMLAttributes } from 'react';
import styled from 'styled-components';

const mqNavList = createMq<HTMLAttributes<HTMLUListElement>>();

export const StyledNavList = styled.ul.attrs((props) => ({
  role: props.role || 'list',
}))`
  display: flex;
  column-gap: 40px;

  ${mqNavList.down('md')`
    column-gap: 20px;
  `}
`;
