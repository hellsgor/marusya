import { Top10Movies } from '@/widgets/top10-movies';
import { RandomMovie } from '../random-movie/RandomMovie';

export function MainPage() {
  return (
    <>
      <RandomMovie />
      <Top10Movies />
    </>
  );
}
