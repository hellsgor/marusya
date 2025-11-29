import s from './BackTitleBar.module.scss';

import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { Icon } from '../icon';
import { Button } from '../button';

type BackTitleBarProps = {
  children: ReactNode;
};

export function BackTitleBar({ children }: BackTitleBarProps) {
  const nav = useNavigate();

  const handlePrevButtonClick = () => {
    nav(-1);
  };

  return (
    <div className={s.backTitleBar}>
      <Button
        className={s.backTitleBar__button}
        variant="ghost"
        smallPaddings={true}
        onClick={handlePrevButtonClick}
      >
        <Icon.ChevronLeft />
      </Button>
      {children}
    </div>
  );
}
