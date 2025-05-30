import st from './MoviesTopList.module.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Loader } from '../Loader/Loader';
import type { UseQueryResult } from '@tanstack/react-query';
import type { MoviesModel } from '../../models/Movie';

interface MoviesTopListProps {
  query: UseQueryResult<MoviesModel | undefined>;
  indexes?: boolean;
}

export function MoviesTopList({
  query: { data, isPending, isError },
  indexes,
}: MoviesTopListProps) {
  const movieList = data
    ? data.map((movie, index) => (
        <MovieCard
          key={movie.id}
          href={`/${movie.id}`}
          poster={movie.posterUrl || undefined}
          alt={`${movie.title} poster`}
          place={indexes ? index + 1 : undefined}
          className={st.moviesTopList__item}
        />
      ))
    : undefined;

  return (
    <div className={st.moviesTopList}>
      {isPending && <Loader />}

      {isError && (
        <span>Что-то пошло не так. Попробуйте перезагрузить страницу.</span>
      )}

      {movieList && <div className={st.moviesTopList__list}>{movieList}</div>}
    </div>
  );
}
