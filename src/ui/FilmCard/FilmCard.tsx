import { memo } from 'react';
import st from './FilmCard.module.scss';
import { NavLink } from 'react-router';

interface FilmCardProps {
  href: string;
  poster?: string;
  alt?: string;
  place?: number;
}

export const FilmCard = memo(function FilmCard({
  href,
  poster,
  alt,
  place,
}: FilmCardProps) {
  return (
    <div className={st.filmCard}>
      <NavLink to={href} className={st.filmCard__link}>
        {poster && (
          <img
            src={poster}
            alt={alt}
            width={224}
            height={336}
            className={st.filmCard__poster}
          />
        )}
      </NavLink>
      {place && <span className={st.filmCard__place}>{place}</span>}
    </div>
  );
});
