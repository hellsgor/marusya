import s from './GenrePage.module.scss';

import { useParams } from 'react-router';

import { getRuGenreName } from '@/entities/genre';
import {
  capitalizeFirstLetter,
  useDocumentTitle,
  useMediaQuery,
} from '@/shared/lib';
import { BackTitleBar, Section } from '@/shared/ui';
import { GenreMoviesList } from '../genre-movies-list/GenreMoviesList';

export function GenrePage() {
  const mq = useMediaQuery('md');
  const { genre } = useParams();

  const normalizedGenre = genre
    ? capitalizeFirstLetter(getRuGenreName(genre))
    : '';

  useDocumentTitle(normalizedGenre);

  return (
    <Section
      indents={[mq ? '24px' : '32px', mq ? '40px' : '160px']}
      className={s.genrePage}
    >
      <div className={s.genrePage__wrapper}>
        <BackTitleBar>
          <h1>{normalizedGenre}</h1>
        </BackTitleBar>
        <GenreMoviesList />
      </div>
    </Section>
  );
}
