import { api } from '@/shared/api';
import { GenresDTOSchema } from '../model/types';
import type { Genres } from '../model/types';
import { GENRES_RU } from '../config/genresRu';

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
          genreRu: GENRES_RU[genre],
        }));
      },
    }),
  }),
});

export const { useGetGenresQuery } = genreApi;
