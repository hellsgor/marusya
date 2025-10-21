import { api } from '@/shared/api';
import { MoviesSchema } from '../model/types';
import type { MoviesModel } from '../model/types';
import type { getByGenreArgs } from '../model/api';

const movieApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getByGenre: builder.query<MoviesModel, getByGenreArgs>({
      query: ({ genre, page, count }: getByGenreArgs) =>
        `/movie?genre=${genre}&page=${page}&count=${count}`,
      serializeQueryArgs: ({ endpointName, queryArgs }) => {
        return `${endpointName}-${queryArgs.genre}`;
      },
      merge: (currentCache, newResponse, { arg }) => {
        currentCache.push(...newResponse);

        if (arg.sortFunc && arg.page >= 2) {
          currentCache.splice(
            0,
            currentCache.length,
            ...arg.sortFunc(currentCache),
          );
        }
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.page !== previousArg?.page;
      },
      providesTags: (_result, _error, { genre }) => [
        { type: 'movies', id: genre },
      ],
      transformResponse: (
        response: unknown,
        _meta,
        { genre, page, sortFunc },
      ): MoviesModel => {
        const result = MoviesSchema.safeParse(response);

        if (!result.success) {
          throw new Error(
            `Ошибка валидации фильмов жанра ${genre}: ${result.error}`,
          );
        }

        if (sortFunc && page < 2) {
          return sortFunc(result.data);
        }

        return result.data;
      },
    }),
  }),
});

export const { useGetByGenreQuery } = movieApi;
