import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';
import type { MovieModel } from '@/entities/movie';

import {
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
  useGetFavoritesQuery,
} from '../../api/favoritesApi';

type useFavoritesControlProps = {
  id: MovieModel['id'] | undefined;
};

type useFavoritesControlType = {
  favorites: MovieModel[] | undefined;
  isFetching: boolean;
  isError: boolean;
  error: Error | FetchBaseQueryError | SerializedError | null;
  isFavorite: boolean | undefined;
  addToFavorites: (movieId: MovieModel['id']) => void;
  deleteFromFavorites: (movieId: MovieModel['id']) => void;
};

export function useFavoritesControl({
  id,
}: useFavoritesControlProps): useFavoritesControlType {
  const result: useFavoritesControlType = {
    favorites: undefined,
    isFetching: false,
    isError: false,
    error: null,
    isFavorite: undefined,
    addToFavorites: () => {},
    deleteFromFavorites: () => {},
  };

  const {
    data: favorites,
    isFetching: favoritesFetching,
    isError: isFavoritesError,
    error,
  } = useGetFavoritesQuery();

  let favError = null;

  const [
    addToFavorites,
    { isLoading: addFetching, isError: isAddError, error: addError },
  ] = useAddToFavoritesMutation();
  const [
    deleteFromFavorites,
    { isLoading: deleteFetching, isError: isDeleteError, error: deleteError },
  ] = useDeleteFromFavoritesMutation();

  if (!favorites && isFavoritesError) {
    favError = error;
  }
  const resError = error || favError || addError || deleteError || null;
  if (!id) {
    result.error = new Error(
      'No id passed for comparison with the Favorites array',
    );
  }

  result.favorites = favorites;
  result.isFetching = favoritesFetching || addFetching || deleteFetching;
  result.isError = isFavoritesError || isAddError || isDeleteError;
  result.error = resError;
  result.isFavorite = favorites?.some((m) => m.id === id);
  result.addToFavorites = (movieId: MovieModel['id']) => {
    addToFavorites({ id: movieId });
  };
  result.deleteFromFavorites = (movieId: MovieModel['id']) => {
    deleteFromFavorites({ id: movieId });
  };

  return result;
}
