import { useGetRandomQuery } from '@/entities/movie';
import { useMediaQuery } from '@/shared/lib';
import { Loader, Section, PageError } from '@/shared/ui';
import { MovieDetailContainer } from '@/widgets/movie-detail-container';

export function MainPage() {
  const mq = useMediaQuery('md');
  const { data: movie, isFetching, isError } = useGetRandomQuery();

  return (
    <>
      <Section indents={[!mq ? '128px' : '64px', !mq ? '0' : '24px']}>
        {isFetching && <Loader size="big" fixed />}
        {isError && (
          <PageError errorCode="e001" backdropText="Ooops!"></PageError>
        )}

        {!isFetching && !isError && movie && (
          <MovieDetailContainer random movie={movie} />
        )}
      </Section>
    </>
  );
}
