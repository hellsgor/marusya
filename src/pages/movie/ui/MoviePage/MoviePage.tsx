import { Loader, Section, PageError } from '@/shared/ui';
import { useMovieSlug } from '../../lib/hooks/useMovieSlug';
import { useGetByIdQuery } from '@/entities/movie';
import { MovieDetail, MovieInfo } from '@/entities/movie';
import { useMediaQuery } from '@/shared/lib';

export function MoviePage() {
  const mq = useMediaQuery('md');
  const { id } = useMovieSlug();
  const { isFetching, isError } = useGetByIdQuery(id);

  return (
    <Section indents={[!mq ? '128px' : '64px', !mq ? '120px' : '32px']}>
      {isFetching && <Loader size="big" fixed />}
      {isError && (
        <PageError errorCode="e001" backdropText="Ooops!"></PageError>
      )}

      {!isFetching && !isError && (
        <>
          <MovieDetail />
          <MovieInfo />
        </>
      )}
    </Section>
  );
}
