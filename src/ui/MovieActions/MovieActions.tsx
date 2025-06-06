import st from './MovieActions.module.scss';

import { Button } from '../Button/Button';
import { Heart, Refresh } from '../icons';
import clsx from 'clsx';

export interface MovieActionsProps {
  onRefresh?: () => void;
  url?: string;
}

export function MovieActions({ url, onRefresh }: MovieActionsProps) {
  return (
    <div className={st.movieActions}>
      <Button
        type="button"
        className={clsx(
          st.movieActions__button,
          st.movieActions__button_mdWide,
        )}
      >
        Трейлер
      </Button>
      {url && (
        <Button href={url} variant="secondary">
          О фильме
        </Button>
      )}
      <Button type="button" variant="secondary" smallPaddings={true}>
        <Heart />
      </Button>
      {onRefresh && (
        <Button
          type="button"
          variant="secondary"
          smallPaddings={true}
          onClick={onRefresh}
        >
          <Refresh />
        </Button>
      )}
    </div>
  );
}
