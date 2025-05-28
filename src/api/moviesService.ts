import { MoviesSchema } from '../models/Movie';
import { apiClient } from './api-client';

export const moviesService = {
  getTop10: async () => {
    return apiClient(MoviesSchema, {
      method: 'GET',
      url: '/movie/top10',
    });
  },
};
