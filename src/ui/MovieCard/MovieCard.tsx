import st from './MovieCard.module.scss';

import { memo } from 'react';
import { NavLink } from 'react-router';

interface MovieCardProps {
  href: string;
  poster?: string;
  alt?: string;
  place?: number;
}

export const MovieCard = memo(function MovieCard({
  href,
  poster,
  alt,
  place,
}: MovieCardProps) {
  return (
    <div className={st.movieCard}>
      <NavLink to={href} className={st.movieCard__link}>
        {poster && (
          <img
            src={poster}
            alt={alt}
            width={224}
            height={336}
            className={st.movieCard__poster}
          />
        )}
      </NavLink>
      {place && <span className={st.movieCard__place}>{place}</span>}
    </div>
  );
});
