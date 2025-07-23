import st from './GenreCard.module.scss';

import { memo } from 'react';
import { NavLink } from 'react-router';
import { Poster } from '../Poster/Poster';

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
        {poster && <Poster src={poster} alt={alt || ''} />}
      </div>
      <span className={st.genreCard__title}>{title}</span>
    </NavLink>
  );
});
