import { ProfileSchema } from '../models';
import { SuccessSchema, type LoginModel, type UserModel } from '../models';
import { apiClient } from './apiClient';

export const userService = {
  login: async (data: LoginModel) => {
    return apiClient(SuccessSchema, {
      method: 'POST',
      url: '/auth/login',
      data,
      withCredentials: true,
    });
  },
  get: async () => {
    return apiClient(ProfileSchema, {
      method: 'GET',
      url: '/profile',
      withCredentials: true,
    });
  },
  create: async (data: UserModel) => {
    return apiClient(SuccessSchema, {
      method: 'POST',
      url: '/user',
      data,
      withCredentials: true,
    });
  },
};
