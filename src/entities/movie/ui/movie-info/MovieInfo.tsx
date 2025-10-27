import * as S from './MovieInfo.styled';

import { MOVIE_PROPERTIES_RU } from '../../config/moviePropertiesRu';
import { getMovieProp } from '../../lib';
import { useAppSelector } from '@/shared/lib';

export function MovieInfo() {
  const movie = useAppSelector((state) => state.currentMovie.movie);

  return (
    <S.Root>
      <h2>О фильме</h2>
      <S.PropertiesWrapper>
        {movie &&
          (
            Object.keys(MOVIE_PROPERTIES_RU) as Array<
              keyof typeof MOVIE_PROPERTIES_RU
            >
          ).map((key) => {
            const prop = getMovieProp(key, movie);
            if (!prop.value) return null;

            return (
              <S.Property key={key}>
                <S.PropertyKey>{prop.name}</S.PropertyKey>
                <span>{prop.value}</span>
              </S.Property>
            );
          })}
      </S.PropertiesWrapper>
    </S.Root>
  );
}
