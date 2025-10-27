import { Icon } from '@/shared/ui';
import type { MovieModel } from '../../model/types';
import * as S from './Rating.styled';

type RatingProps = {
  rate: MovieModel['tmdbRating'];
};

export function Rating({ rate }: RatingProps) {
  const rounded = Math.round((rate + Number.EPSILON) * 10) / 10;

  return (
    <S.StyledRoot $rate={rounded}>
      <Icon.Star size={16} />
      <span>{rounded.toFixed(1).replace('.', ',')}</span>
    </S.StyledRoot>
  );
}
