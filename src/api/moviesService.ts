import { GenresDTOSchema } from '../models/GenresDTO';
import { MovieSchema, MoviesSchema } from '../models/Movie';
import { apiClient } from './apiClient';

export const moviesService = {
  getTop10: async () => {
    return apiClient(MoviesSchema, {
      method: 'GET',
      url: '/movie/top10',
    });
  },

  getRandom: async () => {
    return apiClient(MovieSchema, {
      method: 'GET',
      url: '/movie/random',
    });
  },

  getGenres: async () => {
    return apiClient(GenresDTOSchema, {
      method: 'GET',
      url: '/movie/genres',
    });
  },

  getGenreFirstMovie: async (genre: string) => {
    return apiClient(MoviesSchema, {
      method: 'GET',
      url: `/movie?genre=${genre}&count=1`,
    });
  },
};
