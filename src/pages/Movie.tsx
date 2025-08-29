import { useParams } from 'react-router';
import { Section } from '../ui/Section/Section';
import { useMovie } from '../hooks/useMovie';
import { MovieDetail } from '../components/MovieDetail/MovieDetail';
import { Loader } from '../ui/Loader/Loader';
import { ErrorText } from '../ui/ErrorText/ErrorText';
import { MovieAbout } from '../ui/MovieAbout/MovieAbout';

export function Movie() {
  const movieIdParam = useParams().movieId;
  const movieId = movieIdParam ? Number(movieIdParam) : undefined;

  const { data: movie, isFetching, isError } = useMovie(movieId);

  if (isFetching) {
    return <Loader size="big" />;
  }

  if (isError || !movie) {
    return <ErrorText errorKey={'e001'} />;
  }

  return (
    <>
      <Section indentsClasses="pt-32 pt-md-0">
        <MovieDetail data={movie} />
      </Section>
      <Section indentsClasses="pt-40 pb-120 pt-md-32 pb-md-32">
        <MovieAbout data={movie} />
      </Section>
    </>
  );
}
