import { GenresList } from '../components/GenresList/GenresList';
import { Section } from '../ui/Section/Section';

export function Genres() {
  return (
    <Section indentsClasses="pt-64 pb-160 pt-md-16 pb-md-40">
      <h1 className="heading heading_1">Жанры фильмов</h1>
      <GenresList />
    </Section>
  );
}
