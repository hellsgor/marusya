import { useGetRandomQuery } from '@/entities/movie';
import { useMediaQuery } from '@/shared/lib';
import { Loader, PageError, Section } from '@/shared/ui';
import { MovieDetail } from '@/widgets/movie-detail';

export function RandomMovie() {
  const mq = useMediaQuery('md');
  const { data: movie, isFetching, isError, refetch } = useGetRandomQuery();

  return (
    <Section indents={['0', !mq ? '0' : '24px']} style={{ minHeight: '552px' }}>
      {isFetching && <Loader size="big" fixed />}
      {isError && (
        <PageError errorCode="e001" backdropText="Ooops!"></PageError>
      )}

      {!isFetching && !isError && movie && (
        <MovieDetail
          movie={movie}
          randomRefetch={() => {
            refetch().finally(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            });
          }}
        />
      )}
    </Section>
  );
}
