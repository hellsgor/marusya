import { useParams } from 'react-router';
import { Section } from '../ui/Section/Section';
import { getTitle } from '../helpers';
import { GENRES_RU } from '../constants';
import { BackTitleBar } from '../ui/BackTitleBar/BackTitleBar';
import { Button } from '../ui/Button/Button';
import { useMovies } from '../hooks/useMovies';

export function Genre() {
  const { genreName } = useParams();
  const {
    movies,
    query: { fetchNextPage, hasNextPage },
  } = useMovies(genreName);

  console.log(movies);

  return (
    <Section indentsClasses="pt-64 pb-160 pt-md-16 pb-md-40">
      <BackTitleBar
        headingNode={
          <h1 className="heading heading_1">
            {getTitle(genreName ?? '', GENRES_RU)}
          </h1>
        }
      />

      <Button
        variant="primary"
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage}
        style={{ margin: '0 auto' }}
      >
        Показать ещё
      </Button>
    </Section>
  );
}
