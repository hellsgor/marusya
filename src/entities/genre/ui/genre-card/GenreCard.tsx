import s from './GenreCard.module.scss';
import type { Genre } from '../../model/types';

import { Poster } from '@/shared/ui/poster';

import { Link } from 'react-router';
import { ROUTES } from '@/shared/routes';

import { capitalizeFirstLetter } from '@/shared/lib';
import { Card } from '@/shared/ui/card';

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
        />
        <h3 className={s.genreCard__title}>
          {capitalizeFirstLetter(genre.genreRu)}
        </h3>
      </Card>
    </Link>
  );
}
