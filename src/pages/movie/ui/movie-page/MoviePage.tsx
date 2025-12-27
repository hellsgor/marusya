import { movieApi, MovieInfo, useGetByIdQuery } from '@/entities/movie';
import { useAppSelector, useMediaQuery } from '@/shared/lib';
import { Loader, PageError, Section } from '@/shared/ui';
import { MovieDetailContainer } from '@/widgets/movie-detail-container';
import { useMovieSlug } from '../../lib/hooks/useMovieSlug';

export function MoviePage() {
  const mq = useMediaQuery('md');
  const { id } = useMovieSlug();

  const randomMovieFromCache = useAppSelector((state) => {
    const result = movieApi.endpoints.getRandom.select()(state);
    return result.data?.id === id ? result.data : undefined;
  });

  const {
    data: movie,
    isFetching,
    isError,
  } = useGetByIdQuery(id, {
    refetchOnMountOrArgChange: false,
    skip: !!randomMovieFromCache,
  });

  const finalMovie = randomMovieFromCache || movie;
  const finalIsFetching = !randomMovieFromCache && isFetching;
  const finalIsError = !randomMovieFromCache && isError;

  return (
    <Section indents={['0', !mq ? '120px' : '32px']}>
      {finalIsFetching && <Loader size="big" fixed />}
      {finalIsError && (
        <PageError errorCode="e001" backdropText="Ooops!"></PageError>
      )}

      {!finalIsFetching && !finalIsError && finalMovie && (
        <>
          <MovieDetailContainer movie={finalMovie} />
          <MovieInfo movie={finalMovie} />
        </>
      )}
    </Section>
  );
}
