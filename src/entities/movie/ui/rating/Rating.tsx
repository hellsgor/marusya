import s from './Rating.module.scss';
import clsx from 'clsx';

import type { MovieModel } from '../../model/types';

import { Icon } from '@/shared/ui';

type RatingProps = {
  rate: MovieModel['tmdbRating'];
  isSmall?: boolean;
};

export function Rating({ rate, isSmall }: RatingProps) {
  const rounded = Math.round((rate + Number.EPSILON) * 10) / 10;

  const ratingModifier = (roundedRate: number) => {
    if (roundedRate < 4.5) return s.rating_red;
    if (roundedRate < 6.0) return s.rating_gray;
    if (roundedRate < 8.5) return s.rating_green;
    return s.rating_gold;
  };

  return (
    <div
      className={clsx(
        s.rating,
        isSmall && s.rating_small,
        ratingModifier(rounded),
      )}
    >
      <Icon.Star size={16} />
      <span>{rounded.toFixed(1).replace('.', ',')}</span>
    </div>
  );
}
