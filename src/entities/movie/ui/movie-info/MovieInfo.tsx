import * as S from './MovieInfo.styled';

import type { MovieModel } from '../../model/types';
import { MOVIE_PROPERTIES_RU } from '../../config/moviePropertiesRu';
import { getMovieProp } from '../../lib';

type MovieInfoProps = {
  movie: MovieModel;
};

export function MovieInfo({ movie }: MovieInfoProps) {
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
