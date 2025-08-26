import { useFavorites } from '../../hooks/useFavorites';

export function Favorites() {
  const fav = useFavorites();
  console.log(fav);

  return <p>Избранное</p>;
}
