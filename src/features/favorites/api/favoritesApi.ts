import { MoviesSchema, type MoviesModel } from '@/entities/movie';
import { api } from '@/shared/api';
import {
  addToFavoritesDTOSchema,
  deleteFromFavoritesDTOSchema,
  type AddToFavoritesDataType,
  type AddToFavoritesDTOType,
  type DeleteFromFavoritesDataType,
  type DeleteFromFavoritesDTOType,
} from '../model/types';

const favoritesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getFavorites: builder.query<MoviesModel, void>({
      query: () => '/favorites',
      providesTags: [{ type: 'user', id: 'favorites' }],
      transformResponse: (response: unknown) => {
        const result = MoviesSchema.safeParse(response);

        if (!result.success) {
          throw new Error(`Ошибка запроса избранного: ${result.error}`);
        }

        return result.data;
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
        const result = addToFavoritesDTOSchema.safeParse(response);

        if (!result.success) {
          throw new Error(`Ошибка добавления в избранное: ${result.error}`);
        }

        return result.data;
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
        const result = deleteFromFavoritesDTOSchema.safeParse(response);

        if (!result.success) {
          throw new Error(`Ошибка удаления из избранного: ${result.error}`);
        }

        return result.data;
      },
    }),
  }),
});

export const {
  useGetFavoritesQuery,
  useAddToFavoritesMutation,
  useDeleteFromFavoritesMutation,
} = favoritesApi;
