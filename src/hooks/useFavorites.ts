import { useQuery } from '@tanstack/react-query';
import { useAppSelector } from '../store/hooks';
import { favoriteService } from '../api/favoritesService';

export function useFavorites() {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn);

  const query = useQuery({
    queryKey: ['favorites'],
    enabled: isLoggedIn,
    queryFn: favoriteService.get,
  });

  return query;
}
