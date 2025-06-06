import { useQuery } from '@tanstack/react-query';
import { MoviesList } from '../ui/MoviesList/MoviesList';
import type { MovieModel } from '../models/Movie';
import { moviesService } from '../api/moviesService';
import { Section } from '../ui/Section/Section';
import { RandomMovie } from '../components/RandomMovie/RandomMovie';

export function Home() {
  const top10Query = useQuery<MovieModel[] | undefined>({
    queryKey: ['movies', 'top10'],
    queryFn: moviesService.getTop10,
    staleTime: Infinity,
  });

  return (
    <>
      <Section indentsClasses="pt-56 pb-0 pb-lg-56 pt-md-0 pb-md-0">
        <RandomMovie />
      </Section>

      <Section indentsClasses="pt-40 pb-120 pt-md-32 pb-md-32">
        <h2 className={'heading heading_2'}>Топ 10 фильмов</h2>
        <MoviesList query={top10Query} isIndexes={true} isSlider={true} />
      </Section>
    </>
  );
}
