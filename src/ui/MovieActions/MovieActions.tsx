import st from './MovieActions.module.scss';

import { Button } from '../Button/Button';
import { Heart, Refresh } from '../icons';

export interface MovieActionsProps {
  onRefresh?: () => void;
  url?: string;
}

export function MovieActions({ url, onRefresh }: MovieActionsProps) {
  return (
    <div className={st.movieActions}>
      <Button type="button">Трейлер</Button>
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
