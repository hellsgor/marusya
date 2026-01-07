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
  // addToFavorites: (movieId: MovieModel['id']) => void;
  // deleteFromFavorites: (movieId: MovieModel['id']) => void;
  toggleFavoriteFunc: (() => void) | undefined;
};

export function useFavoritesControl({
  id,
}: useFavoritesControlProps): useFavoritesControlType {
  // const result: useFavoritesControlType = {
  //   favorites: undefined,
  //   isFetching: false,
  //   isError: false,
  //   error: null,
  //   isFavorite: undefined,
  //   // addToFavorites: () => {},
  //   // deleteFromFavorites: () => {},
  //   // handleFavoriteButtonClick: () => {},
  //   // isAuthorized: false,
  // };

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

  // result.favorites = favorites;
  // result.isFetching = favoritesFetching || addFetching || deleteFetching;
  // result.isError = isFavoritesError || isAddError || isDeleteError;
  // result.error = resError;
  // result.isFavorite = favorites?.some((m) => m.id === id);
  // result.addToFavorites = (movieId: MovieModel['id']) => {
  //   addToFavorites({ id: movieId });
  // };
  // result.deleteFromFavorites = (movieId: MovieModel['id']) => {
  //   deleteFromFavorites({ id: movieId });
  // };
  // result.handleFavoriteButtonClick =

  // return result;
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
