import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import type { SerializedError } from '@reduxjs/toolkit';
import type { MovieModel } from '@/entities/movie';

import {
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
  useGetFavoritesQuery,
} from '../../api/favoritesApi';
import { useGetUserQuery } from '@/entities/user';

type useFavoritesControlProps = {
  id: MovieModel['id'];
};

type useFavoritesControlType = {
  favorites: MovieModel[] | undefined;
  isFetching: boolean;
  isError: boolean;
  error: Error | FetchBaseQueryError | SerializedError | null;
  isFavorite: boolean | undefined;
  toggleFavoriteFunc: (() => void) | undefined;
};

export function useFavoritesControl({
  id,
}: useFavoritesControlProps): useFavoritesControlType {
  const { data: user, isError: isUserError } = useGetUserQuery();
  const isAuthorized = !isUserError && !!user;

  const {
    data: favorites,
    isFetching: favoritesFetching,
    isError: isFavoritesError,
    error,
  } = useGetFavoritesQuery(undefined, { skip: !isAuthorized });

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

  const isFavorite = favorites?.some((m) => m.id === id);

  return {
    favorites,
    isFetching: favoritesFetching || addFetching || deleteFetching,
    isError: isFavoritesError || isAddError || isDeleteError,
    error: resError,
    isFavorite,
    toggleFavoriteFunc: isAuthorized
      ? isFavorite
        ? () => {
            deleteFromFavorites({ id });
          }
        : () => {
            addToFavorites({ id });
          }
      : undefined,
  };
}
