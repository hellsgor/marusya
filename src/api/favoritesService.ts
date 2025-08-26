import { MoviesSchema } from '../models';
import { apiClient } from './apiClient';

export const favoriteService = {
  get: async () => {
    return apiClient(MoviesSchema, {
      method: 'GET',
      url: '/favorites',
      withCredentials: true,
    });
  },
};
