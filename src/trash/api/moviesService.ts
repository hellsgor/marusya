import type { GenreModel, MovieModel } from '../models';
import { GenresDTOSchema } from '../models/GenresDTO';
import { MovieSchema, MoviesSchema } from '../models/Movie';
import { apiClient } from '../../shared/api/client';

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

  getMovies: async (params: {
    genre?: GenreModel['name'];
    title?: MovieModel['title'];
    page?: number;
    count?: number;
  }) => {
    return apiClient(MoviesSchema, {
      method: 'GET',
      url: '/movie',
      params,
    });
  },

  getMovie: async (id: MovieModel['id']) => {
    return apiClient(MovieSchema, {
      method: 'GET',
      url: `/movie/${id}`,
    });
  },
};
