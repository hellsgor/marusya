import * as S from './BackTitleBar.styled';

import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '../icon';

type BackTitleBarProps = {
  children: ReactNode;
};

export function BackTitleBar({ children }: BackTitleBarProps) {
  const nav = useNavigate();

  const handlePrevButtonClick = () => {
    nav(-1);
  };

  return (
    <S.StyledBackTitleBar>
      <S.StyledBut
        $variant="ghost"
        $smallPaddings={true}
        onClick={handlePrevButtonClick}
      >
        <Icon.ChevronLeft />
      </S.StyledBut>
      {children}
    </S.StyledBackTitleBar>
  );
}
