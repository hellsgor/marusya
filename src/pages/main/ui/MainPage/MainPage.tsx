import { useGetRandomQuery } from '@/entities/movie';

export function MainPage() {
  const { data: movie } = useGetRandomQuery();
  console.log(movie);

  return <div>Main Page</div>;
}
