import { Loader, Section, PageError } from '@/shared/ui';
import { useMovieSlug } from '../../lib/hooks/useMovieSlug';
import { movieApi, useGetByIdQuery } from '@/entities/movie';
import { MovieInfo } from '@/entities/movie';
import { useAppSelector, useMediaQuery } from '@/shared/lib';
import { MovieDetailContainer } from '@/widgets/movie-detail-container';

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
    <Section indents={[!mq ? '128px' : '64px', !mq ? '120px' : '32px']}>
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
