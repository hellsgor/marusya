import s from './MovieInfo.module.scss';

import type { MovieModel } from '../../model/types';
import { MOVIE_PROPERTIES_RU } from '../../config/moviePropertiesRu';
import { getMovieProp } from '../../lib';

type MovieInfoProps = {
  movie: MovieModel;
};

export function MovieInfo({ movie }: MovieInfoProps) {
  return (
    <div className={s.movieInfo}>
      <h2>О фильме</h2>
      <div className={s.movieInfo__wrapper}>
        {(
          Object.keys(MOVIE_PROPERTIES_RU) as Array<
            keyof typeof MOVIE_PROPERTIES_RU
          >
        ).map((key) => {
          const prop = getMovieProp(key, movie);
          if (!prop.value) return null;

          return (
            <div className={s.movieInfo__property} key={key}>
              <span className={s.movieInfo__key}>{prop.name}</span>
              <span>{prop.value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
