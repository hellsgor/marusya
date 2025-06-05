import clsx from 'clsx';
import { Star } from '../icons';
import st from './Rating.module.scss';

interface RatingProps {
  rate: number;
}

export function Rating({ rate }: RatingProps) {
  const rounded = Math.round((rate + Number.EPSILON) * 10) / 10;

  const mod = (() => {
    if (rounded < 4.5) {
      return st.rating_red;
    }

    if (rounded >= 4.5 && rounded < 6.0) {
      return st.rating_gray;
    }

    if (rounded >= 6.0 && rounded < 8.5) {
      return st.rating_green;
    }

    if (rounded >= 8.5) {
      return st.rating_gold;
    }
  })();

  return (
    <div className={clsx(st.rating, mod)}>
      <Star />
      <span>{rounded.toFixed(1).replace('.', ',')}</span>
    </div>
  );
}
