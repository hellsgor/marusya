import type {
  AddToFavoritesDataType,
  AddToFavoritesDTOType,
  DeleteFromFavoritesDataType,
  DeleteFromFavoritesDTOType,
} from '../model/types';
import type { MoviesModel } from '@/entities/movie';

import { api, checkResponse } from '@/shared/api';
import { MoviesSchema } from '@/entities/movie';
import {
  addToFavoritesDTOSchema,
  deleteFromFavoritesDTOSchema,
} from '../model/types';

const favoritesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFavorites: builder.query<MoviesModel, void>({
      query: () => '/favorites',
      providesTags: [{ type: 'user', id: 'favorites' }],
      transformResponse: (response: unknown) => {
        return checkResponse(
          response,
          MoviesSchema,
          'Ошибка запроса избранного',
        );
      },
    }),

    addToFavorites: builder.mutation<
      AddToFavoritesDTOType,
      AddToFavoritesDataType
    >({
      query: ({ id }) => ({
        url: '/favorites',
        method: 'POST',
        body: { id: String(id) },
      }),
      invalidatesTags: [{ type: 'user', id: 'favorites' }],
      transformResponse: (response: unknown) => {
        return checkResponse(
          response,
          addToFavoritesDTOSchema,
          'Ошибка добавления в избранное',
        );
      },
    }),

    deleteFromFavorites: builder.mutation<
      DeleteFromFavoritesDTOType,
      DeleteFromFavoritesDataType
    >({
      query: ({ id }) => ({
        url: `/favorites/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'user', id: 'favorites' }],
      transformResponse: (response: unknown) => {
        return checkResponse(
          response,
          deleteFromFavoritesDTOSchema,
          'Ошибка удаления из избранного',
        );
      },
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
} = favoritesApi;
