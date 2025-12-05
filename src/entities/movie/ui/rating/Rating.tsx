import s from './Rating.module.scss';

import type { MovieModel } from '../../model/types';

import { Icon } from '@/shared/ui';
import clsx from 'clsx';

type RatingProps = {
  rate: MovieModel['tmdbRating'];
};

export function Rating({ rate }: RatingProps) {
  const rounded = Math.round((rate + Number.EPSILON) * 10) / 10;

  const ratingModifier = (roundedRate: number) => {
    if (roundedRate < 4.5) return s.rating_red;
    if (roundedRate < 6.0) return s.rating_gray;
    if (roundedRate < 8.5) return s.rating_green;
    return s.rating_gold;
  };

  return (
    <div className={clsx(s.rating, ratingModifier(rounded))}>
      <Icon.Star size={16} />
      <span>{rounded.toFixed(1).replace('.', ',')}</span>
    </div>
  );
}
