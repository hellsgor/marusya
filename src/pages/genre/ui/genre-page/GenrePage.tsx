import s from './GenrePage.module.scss';
import { useParams } from 'react-router';
import { BackTitleBar, Section } from '@/shared/ui';
import { capitalizeFirstLetter } from '@/shared/lib';
import { GenreMoviesList } from '../genre-movies-list/GenreMoviesList';
import { getRuGenreName } from '@/entities/genre';

export function GenrePage() {
  const { genre } = useParams();

  return (
    <Section indents={'160px'} className={s.genrePage}>
      <div className={s.genrePage__wrapper}>
        <BackTitleBar>
          <h1>{genre ? capitalizeFirstLetter(getRuGenreName(genre)) : ''}</h1>
        </BackTitleBar>
        <GenreMoviesList />
      </div>
    </Section>
  );
}
