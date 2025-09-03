import st from './MovieActions.module.scss';
import clsx from 'clsx';

import type { MovieModel } from '../../models';

import { Button } from '../Button/Button';
import { Refresh } from '../icons';

import { ToggleFavorite } from '../../components/ToggleFavorite/ToggleFavorite';

export interface MovieActionsProps {
  onTrailerButtonClick: () => void;
  onRefresh?: () => void;
  url?: string;
  isTrailer: boolean;
  id: MovieModel['id'];
}

export function MovieActions({
  onTrailerButtonClick,
  url,
  onRefresh,
  isTrailer,
  id,
}: MovieActionsProps) {
  return (
    <div
      className={clsx(st.movieActions, !onRefresh && st.movieActions_oneRow)}
    >
      <Button
        type="button"
        className={clsx(
          st.movieActions__button,
          st.movieActions__button_mdWide,
        )}
        onClick={onTrailerButtonClick}
        disabled={!isTrailer}
      >
        Трейлер
      </Button>

      {url && (
        <Button href={url} variant="secondary">
          О фильме
        </Button>
      )}

      <ToggleFavorite id={id} />

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
