import { api } from '@/shared/api';
import { GenresDTOSchema } from '../model/types';
import type { Genres } from '../model/types';
import { GENRES_RU } from '../config/genresRu';

const genreApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query<Genres, void>({
      query: () => '/movie/genres',
      providesTags: ['genres'],
      transformResponse: (response: unknown): Genres =>
        GenresDTOSchema.parse(response).map((genre) => ({
          genreEn: genre,
          genreRu: GENRES_RU[genre],
        })),
    }),
  }),
});

export const { useGetGenresQuery } = genreApi;
