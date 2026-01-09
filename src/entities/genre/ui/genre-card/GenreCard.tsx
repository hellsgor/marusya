import s from './GenreCard.module.scss';

import type { Genre } from '../../model/types';

import { Link } from 'react-router';

import { capitalizeFirstLetter } from '@/shared/lib';
import { ROUTES } from '@/shared/routes';
import { Card, Poster } from '@/shared/ui';

type GenreCardProps = {
  genre: Genre;
};

export function GenreCard({ genre }: GenreCardProps) {
  return (
    <Link className={s.genreCard} to={ROUTES.genre(genre.genreEn)}>
      <Card className={s.genreCard__wrapper}>
        <Poster
          src={genre.backdropUrl ?? undefined}
          alt={`${genre.genreRu} genre image`}
          className={s.genreCard__poster}
        />
        <h3 className={s.genreCard__title}>
          {capitalizeFirstLetter(genre.genreRu)}
        </h3>
      </Card>
    </Link>
  );
}
