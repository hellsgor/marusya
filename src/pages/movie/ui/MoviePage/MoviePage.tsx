import { Loader, Section, PageError } from '@/shared/ui';
import { useMovieSlug } from '../../lib/hooks/useMovieSlug';
import { useGetByIdQuery } from '@/entities/movie';
import { MovieInfo } from '@/entities/movie';
import { useMediaQuery } from '@/shared/lib';
import { MovieDetailContainer } from '@/widgets/movie-detail-container';

export function MoviePage() {
  const mq = useMediaQuery('md');
  const { id } = useMovieSlug();
  const { data: movie, isFetching, isError } = useGetByIdQuery(id);

  return (
    <Section indents={[!mq ? '128px' : '64px', !mq ? '120px' : '32px']}>
      {isFetching && <Loader size="big" fixed />}
      {isError && (
        <PageError errorCode="e001" backdropText="Ooops!"></PageError>
      )}

      {!isFetching && !isError && movie && (
        <>
          <MovieDetailContainer movie={movie} />
          <MovieInfo movie={movie} />
        </>
      )}
    </Section>
  );
}
