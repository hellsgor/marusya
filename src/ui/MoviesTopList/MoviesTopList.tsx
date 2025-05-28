import st from './MoviesTopList.module.scss';
import { useQuery } from '@tanstack/react-query';
import { moviesService } from '../../api/moviesService';
import type { MoviesModel } from '../../models/Movie';
import { MovieCard } from '../MovieCard/MovieCard';
import { Container } from '../Container/Container';

export function MoviesTopList() {
  const { data, isPending, isError } = useQuery<MoviesModel | undefined>({
    queryKey: ['movies', 'top10'],
    queryFn: moviesService.getTop10,
    staleTime: Infinity,
  });

  return (
    <div className={st.moviesTopList}>
      <Container>
        <div className={st.moviesTopList__wrapper}>
          <h2 className={'heading heading_2'}>Топ 10 фильмов</h2>

          {isPending && <span>Loading...</span>}

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
      </Container>
    </div>
  );
}
