import { Genres } from '../Genres/Genres';
import { Section } from '@/shared/ui';

export function GenresPage() {
  return (
    <Section indents={'160px'}>
      <h1>Жанры фильмов</h1>
      <Genres />
    </Section>
  );
}
