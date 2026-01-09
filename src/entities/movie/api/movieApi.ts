import { api, checkResponse } from '@/shared/api';
import { MovieSchema, MoviesSchema } from '../model/types';
import type { MovieModel, MoviesModel } from '../model/types';
import type { getByGenreArgs } from '../model/api';

export const movieApi = api.injectEndpoints({
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
        return checkResponse(
          response,
          MoviesSchema,
          `Ошибка валидации фильмов жанра ${genre}`,
          (data) =>
            sortFunc !== undefined && page < 2 ? sortFunc(data) : data,
        );
      },
    }),

    getById: builder.query<MovieModel, MovieModel['id']>({
      query: (id: MovieModel['id']) => `/movie/${id}`,
      providesTags: (_result, _error, id) => [
        { type: 'currentMovie', id: `${id}` },
      ],
      transformResponse: (response: unknown, _meta, id) => {
        return checkResponse(
          response,
          MovieSchema,
          `Ошибка запроса фильма с id=${id}`,
        );
      },
    }),

    getRandom: builder.query<MovieModel, void>({
      query: () => '/movie/random',
      providesTags: (result) =>
        result?.id ? [{ type: 'currentMovie', id: `${result.id}` }] : [],
      transformResponse: (response: unknown) => {
        return checkResponse(
          response,
          MovieSchema,
          'Ошибка запроса случайного фильма',
        );
      },
    }),

    getTop10: builder.query<MoviesModel, void>({
      query: () => '/movie/top10',
      providesTags: () => [{ type: 'movies', id: 'top10' }],
      transformResponse: (response: unknown) => {
        return checkResponse(
          response,
          MoviesSchema,
          'Ошибка запроса ТОП10 фильмов',
        );
      },
    }),
  }),
});

export const {
  useGetByGenreQuery,
  useGetByIdQuery,
  useGetRandomQuery,
  useGetTop10Query,
} = movieApi;
