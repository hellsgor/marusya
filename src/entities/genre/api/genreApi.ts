import type { Genre, Genres } from '../model/types';
import type { MovieModel } from '@/entities/movie/@x/genre';

import { api, checkResponse } from '@/shared/api';
import { GenresDTOSchema } from '../model/types';
import { getMovieBackdropUrl } from '../lib/getMovieBackdropUrl';
import { getRuGenreName } from '../lib/getRuGenreName';

const genreApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query<Genres, void>({
      queryFn: async (_arg, _queryApi, _extraOptions, fetchWithBQ) => {
        try {
          const genresResponse = await fetchWithBQ('/movie/genres');
          if (genresResponse.error) {
            return { error: genresResponse.error };
          }

          const genres = checkResponse(
            genresResponse.data,
            GenresDTOSchema,
            'Ошибка валидации данных жанров',
          );

          const genresWithPosters = await Promise.all(
            genres.map(async (genre) => {
              try {
                const movieResponse = await fetchWithBQ(
                  `/movie?genre=${genre}&page=1&count=50`,
                );
                let backdropUrl: Genre['backdropUrl'] | null = null;

                if (!movieResponse.error && Array.isArray(movieResponse.data)) {
                  const movies = movieResponse.data as Array<MovieModel>;
                  backdropUrl = getMovieBackdropUrl(movies) ?? null;
                }

                return {
                  genreEn: genre,
                  genreRu: getRuGenreName(genre) ?? genre,
                  backdropUrl,
                };
              } catch (_) {
                return {
                  genreEn: genre,
                  genreRu: getRuGenreName(genre) ?? genre,
                  backdropUrl: null,
                };
              }
            }),
          );
          return { data: genresWithPosters };
        } catch (error) {
          return {
            error: {
              status: 'FETCH_ERROR',
              error: String(error),
            },
          };
        }
      },
      providesTags: ['genres'],
    }),
  }),
});

export const { useGetGenresQuery } = genreApi;
