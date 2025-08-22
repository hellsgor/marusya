import st from './MovieCard.module.scss';

import clsx from 'clsx';

import { memo } from 'react';
import { NavLink } from 'react-router';
import { Poster } from '../Poster/Poster';

interface MovieCardProps {
  href: string;
  title: string;
  poster?: string;
  alt?: string;
  place?: number;
  className?: string;
}

export const MovieCard = memo(function MovieCard({
  href,
  title,
  poster,
  alt,
  place,
  className,
}: MovieCardProps) {
  return (
    <div className={clsx(st.movieCard, className)}>
      <NavLink
        to={href}
        className={st.movieCard__link}
        state={{ movieTitle: title }}
      >
        <Poster src={poster} alt={alt} />
      </NavLink>
      {place && <span className={st.movieCard__place}>{place}</span>}
    </div>
  );
});
