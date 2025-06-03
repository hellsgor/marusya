import { useQuery } from '@tanstack/react-query';
import { MoviesList } from '../ui/MoviesList/MoviesList';
import type { MoviesModel } from '../models/Movie';
import { moviesService } from '../api/moviesService';
import { Section } from '../ui/Section/Section';

export function Home() {
  const top10Query = useQuery<MoviesModel | undefined>({
    queryKey: ['movies', 'top10'],
    queryFn: moviesService.getTop10,
    staleTime: Infinity,
  });

  return (
    <>
      <Section>
        <h2 className={'heading heading_2'}>Топ 10 фильмов</h2>
        <MoviesList query={top10Query} isIndexes={true} isSlider={true} />
      </Section>
    </>
  );
}
