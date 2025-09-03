import { useRandomMovie } from '../../hooks/useRandomMovie';
import { ErrorText } from '../../ui/ErrorText/ErrorText';
import { Loader } from '../../ui/Loader/Loader';
import { MovieDetail } from '../MovieDetail/MovieDetail';

export function RandomMovie() {
  const { data, isFetching, isError, refresh } = useRandomMovie();

  if (isFetching) {
    return (
      <div
        style={{
          height: 'var(--random-min-height)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Loader size={'big'} />
      </div>
    );
  }

  if (!data || isError) {
    return <ErrorText errorKey={'e001'} />;
  }

  return (
    <MovieDetail data={data} onRefresh={refresh} url={`/movies/${data.id}`} />
  );
}
