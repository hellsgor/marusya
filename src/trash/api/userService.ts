import { ProfileSchema, SuccessCreateSchema } from '../models';
import { SuccessLoginSchema, type LoginModel, type UserModel } from '../models';
import { apiClient } from './apiClient';

export const userService = {
  login: async (data: LoginModel) => {
    return apiClient(SuccessLoginSchema, {
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
    return apiClient(SuccessCreateSchema, {
      method: 'POST',
      url: '/user',
      data,
      withCredentials: true,
    });
  },
  logout: async () => {
    return apiClient(SuccessLoginSchema, {
      method: 'GET',
      url: '/auth/logout',
      withCredentials: true,
    });
  },
};
