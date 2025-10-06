import { api } from '@/shared/api';
import { GenresDTOSchema, type GenresDTO } from '../model/types';

const genreApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getGenres: builder.query<GenresDTO, void>({
      query: () => '/movie/genres',
      providesTags: ['genres'],
      transformResponse: (response: unknown) => GenresDTOSchema.parse(response),
    }),
  }),
});

export const { useGetGenresQuery } = genreApi;
