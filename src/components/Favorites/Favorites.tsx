import { useFavorites } from '../../hooks/useFavorites';
import { ErrorText } from '../../ui/ErrorText/ErrorText';
import { Loader } from '../../ui/Loader/Loader';
import { MoviesList } from '../../ui/MoviesList/MoviesList';

export function Favorites() {
  const { isFetching, data, isError } = useFavorites();

  if (isFetching) return <Loader size="big" />;
  if (!data || isError) return <ErrorText errorKey={'e001'} />;

  return <MoviesList data={data} isSlider={true} isFavorites={true} />;
}
