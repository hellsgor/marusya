import { useGetRandomQuery } from '@/entities/movie';
import { useMediaQuery } from '@/shared/lib';
import { Loader, Section, PageError } from '@/shared/ui';
import { MovieDetailContainer } from '@/widgets/movie-detail-container';
import { Top10Movies } from '@/widgets/top10-movies';

export function MainPage() {
  const mq = useMediaQuery('md');
  const { data: movie, isFetching, isError, refetch } = useGetRandomQuery();

  return (
    <>
      <Section
        indents={['0', !mq ? '0' : '24px']}
        style={{ minHeight: '552px' }}
      >
        {isFetching && <Loader size="big" fixed />}
        {isError && (
          <PageError errorCode="e001" backdropText="Ooops!"></PageError>
        )}

        {!isFetching && !isError && movie && (
          <MovieDetailContainer
            movie={movie}
            randomRefetch={() => {
              refetch();
            }}
          />
        )}
      </Section>
      <Top10Movies />
    </>
  );
}
