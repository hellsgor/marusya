import { Top10Movies } from '@/widgets/top10-movies';
import { RandomMovie } from '../random-movie/RandomMovie';
import { useDocumentTitle } from '@/shared/lib';

export function MainPage() {
  useDocumentTitle();

  return (
    <>
      <RandomMovie />
      <Top10Movies />
    </>
  );
}
