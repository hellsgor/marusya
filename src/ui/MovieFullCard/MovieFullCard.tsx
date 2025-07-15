import { NavLink } from 'react-router';
import st from './MovieFullCard.module.scss';
import type { MovieModel } from '../../models';
import Poster from '../Poster/Poster';
import { MovieDetails } from '../MovieDetails/MovieDetails';

type MovieFullCardProps = Pick<
  MovieModel,
  'title' | 'tmdbRating' | 'releaseYear' | 'genres' | 'runtime' | 'posterUrl'
> & {
  href: string;
  alt: string;
};

export function MovieFullCard({
  href,
  alt,
  title,
  tmdbRating,
  releaseYear,
  genres,
  runtime,
  posterUrl,
}: MovieFullCardProps) {
  return (
    <NavLink to={href} className={st.movieFullCard}>
      <div className={st.movieFullCard__poster}>
        <Poster src={posterUrl ?? undefined} alt={alt} />
      </div>

      <div className={st.movieFullCard__wrapper}>
        <MovieDetails
          genres={genres}
          releaseYear={releaseYear}
          runtime={runtime}
          tmdbRating={tmdbRating}
          isSmall={true}
        />
        <p className={st.movieFullCard__title}>{title}</p>
      </div>
    </NavLink>
  );
}
