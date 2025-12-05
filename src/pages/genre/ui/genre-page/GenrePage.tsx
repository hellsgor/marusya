import s from './GenrePage.module.scss';
import { useParams } from 'react-router';
import { BackTitleBar, Section } from '@/shared/ui';
import { capitalizeFirstLetter, useMediaQuery } from '@/shared/lib';
import { GenreMoviesList } from '../genre-movies-list/GenreMoviesList';
import { getRuGenreName } from '@/entities/genre';

export function GenrePage() {
  const mq = useMediaQuery('md');
  const { genre } = useParams();

  return (
    <Section
      indents={[mq ? '24px' : '32px', mq ? '40px' : '160px']}
      className={s.genrePage}
    >
      <div className={s.genrePage__wrapper}>
        <BackTitleBar>
          <h1>{genre ? capitalizeFirstLetter(getRuGenreName(genre)) : ''}</h1>
        </BackTitleBar>
        <GenreMoviesList />
      </div>
    </Section>
  );
}
