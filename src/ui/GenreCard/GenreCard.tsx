import st from './GenreCard.module.scss';

import { memo } from 'react';
import { NavLink } from 'react-router';

interface GenreCardProps {
  href: string;
  poster?: string;
  alt?: string;
  title: string;
}

export const GenreCard = memo(function GenreCard({
  href,
  poster,
  alt,
  title,
}: GenreCardProps) {
  return (
    <NavLink to={href} className={st.genreCard}>
      <div className={st.genreCard__image}>
        {poster && (
          <img
            src={poster}
            alt={alt || ''}
            className={st.genreCard__imageItem}
          />
        )}
      </div>
      <span className={st.genreCard__title}>{title}</span>
    </NavLink>
  );
});
