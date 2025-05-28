import st from './MovieCard.module.scss';

import clsx from 'clsx';

import { memo } from 'react';
import { NavLink } from 'react-router';

interface MovieCardProps {
  href: string;
  poster?: string;
  alt?: string;
  place?: number;
  className?: string;
}

export const MovieCard = memo(function MovieCard({
  href,
  poster,
  alt,
  place,
  className,
}: MovieCardProps) {
  return (
    <div className={clsx(st.movieCard, className)}>
      <NavLink to={href} className={st.movieCard__link}>
        {poster && (
          <img src={poster} alt={alt} className={st.movieCard__poster} />
        )}
      </NavLink>
      {place && <span className={st.movieCard__place}>{place}</span>}
    </div>
  );
});
