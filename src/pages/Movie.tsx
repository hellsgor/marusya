import { useParams } from 'react-router';
import { Section } from '../ui/Section/Section';
import { useMovie } from '../hooks/useMovie';
import { MovieDetail } from '../ui/MovieDetail/MovieDetail';
import { Loader } from '../ui/Loader/Loader';
import { ErrorText } from '../ui/ErrorText/ErrorText';
import { MovieAbout } from '../ui/MovieAbout/MovieAbout';

export function Movie() {
  const { movieId } = useParams();

  const { data: movie, isFetching, isError } = useMovie(Number(movieId));

  if (isFetching) {
    return <Loader size="big" />;
  }

  if (isError || !movie) {
    return <ErrorText errorKey={'e001'} />;
  }

  console.log(movie);

  return (
    <>
      <Section indentsClasses="pt-32 pt-md-0">
        <MovieDetail
          data={{
            title: movie.title,
            backdropUrl: movie.backdropUrl,
            plot: movie.plot,
            tmdbRating: movie.tmdbRating,
            releaseYear: movie.releaseYear,
            genres: movie.genres,
            runtime: movie.runtime,
          }}
        />
      </Section>
      <Section indentsClasses="pt-40 pb-120 pt-md-32 pb-md-32">
        <MovieAbout
          data={{
            language: movie.language,
            budget: movie.budget,
            revenue: movie.revenue,
            director: movie.director,
            production: movie.production,
            awardsSummary: movie.awardsSummary,
          }}
        />
      </Section>
    </>
  );
}
