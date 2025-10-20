import { api } from '@/shared/api';
import { GenresDTOSchema } from '../model/types';
import type { Genres } from '../model/types';
import { getRuGenreName } from '../lib/getRuGenreName';

const genreApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query<Genres, void>({
      query: () => '/movie/genres',
      providesTags: ['genres'],
      transformResponse: (response: unknown): Genres => {
        const result = GenresDTOSchema.safeParse(response);

        if (!result.success) {
          throw new Error(`Ошибка валидации данных жанров: ${result.error}`);
        }

        return result.data.map((genre) => ({
          genreEn: genre,
          genreRu: getRuGenreName(genre) ?? genre,
        }));
      },
    }),
  }),
});

export const { useGetGenresQuery } = genreApi;
