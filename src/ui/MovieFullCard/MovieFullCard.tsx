import st from './MovieFullCard.module.scss';
import clsx from 'clsx';

import type { MovieModel } from '../../models';

import { NavLink } from 'react-router';
import Poster from '../Poster/Poster';
import { MovieDetails } from '../MovieDetails/MovieDetails';

type MovieFullCardProps = Pick<
  MovieModel,
  'title' | 'tmdbRating' | 'releaseYear' | 'genres' | 'runtime' | 'posterUrl'
> & {
  href: string;
  alt: string;
  isVertical?: boolean;
};

export function MovieFullCard({
  href,
  alt,
  isVertical,
  title,
  tmdbRating,
  releaseYear,
  genres,
  runtime,
  posterUrl,
}: MovieFullCardProps) {
  return (
    <NavLink
      to={href}
      className={clsx(
        st.movieFullCard,
        isVertical && st.movieFullCard_vertical,
      )}
    >
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
