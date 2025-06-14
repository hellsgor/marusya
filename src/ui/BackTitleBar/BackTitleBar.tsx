import type { ReactNode } from 'react';
import st from './BackTitleBar.module.scss';
import { Button } from '../Button/Button';
import { Back } from '../icons';
import { useNavigate } from 'react-router';

interface BackTitleBarProps {
  headingNode: ReactNode;
}

export function BackTitleBar({ headingNode }: BackTitleBarProps) {
  const navigate = useNavigate();

  const backClickHandle = () => {
    navigate(-1);
  };

  return (
    <div className={st.backTitleBar}>
      <Button
        variant="ghost"
        type="button"
        className={st.backTitleBar__button}
        onClick={backClickHandle}
      >
        <Back />
      </Button>

      {headingNode}
    </div>
  );
}
