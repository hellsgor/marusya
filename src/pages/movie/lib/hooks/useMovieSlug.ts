import { useParams } from 'react-router';

export function useMovieSlug() {
  const { movieSlug } = useParams();
  const [slug, id] = movieSlug?.split('--') || [undefined, undefined];

  return { movieSlug, slug, id: Number(id) };
}
