import { MoviesSchema, SuccessLoginSchema, type MovieModel } from '../models';
import { apiClient } from './apiClient';

export const favoriteService = {
  get: async () => {
    return apiClient(MoviesSchema, {
      method: 'GET',
      url: '/favorites',
      withCredentials: true,
    });
  },

  add: async (id: MovieModel['id']) => {
    return apiClient(SuccessLoginSchema, {
      method: 'POST',
      url: '/favorites',
      withCredentials: true,
      data: id,
    });
  },

  delete: async (id: MovieModel['id']) => {
    return apiClient(SuccessLoginSchema, {
      method: 'DELETE',
      url: `/favorites/${id}`,
      withCredentials: true,
    });
  },
};
