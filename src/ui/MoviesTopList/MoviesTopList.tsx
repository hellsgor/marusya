import st from './MoviesTopList.module.scss';
import { MovieCard } from '../MovieCard/MovieCard';
import { Loader } from '../Loader/Loader';
import type { UseQueryResult } from '@tanstack/react-query';
import type { MoviesModel } from '../../models/Movie';

interface MoviesTopListProps {
  query: UseQueryResult<MoviesModel | undefined>;
}

export function MoviesTopList({ query }: MoviesTopListProps) {
  const { data, isPending, isError } = query;

  return (
    <div className={st.moviesTopList}>
      {isPending && <Loader />}

      {isError && (
        <span>Что-то пошло не так. Попробуйте перезагрузить страницу.</span>
      )}

      <div className={st.moviesTopList__list}>
        {data &&
          data.map((movie, index) => (
            <MovieCard
              key={movie.id}
              href={`/${movie.id}`}
              poster={movie.posterUrl || undefined}
              alt={`${movie.title} poster`}
              place={index + 1}
              className={st.moviesTopList__item}
            />
          ))}
      </div>
    </div>
  );
}
