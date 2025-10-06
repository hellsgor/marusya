import { useGetGenresQuery } from '@/entities/genre';

export function Genres() {
  const { data } = useGetGenresQuery();
  console.log(data);

  return <div>Genres</div>;
}
