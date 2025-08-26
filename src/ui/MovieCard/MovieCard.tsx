import st from './MovieCard.module.scss';

import clsx from 'clsx';

import { memo } from 'react';
import { NavLink } from 'react-router';
import { Poster } from '../Poster/Poster';
import { CloseButton } from '../CloseButton/CloseButton';

interface MovieCardProps {
  id: number;
  href: string;
  title: string;
  poster?: string;
  alt?: string;
  place?: number;
  removeButton?: boolean;
  className?: string;
}

export const MovieCard = memo(function MovieCard({
  id,
  href,
  title,
  poster,
  alt,
  place,
  removeButton,
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
      {removeButton && (
        <CloseButton
          onClick={() => console.log(id)}
          className={st.movieCard__removeButton}
        />
      )}
    </div>
  );
});
