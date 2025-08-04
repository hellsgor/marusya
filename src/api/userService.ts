import { ProfileSchema } from '../models';
import { SuccessLoginSchema, type LoginModel } from '../models/User';
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
  getProfile: async () => {
    return apiClient(ProfileSchema, {
      method: 'GET',
      url: '/profile',
      withCredentials: true,
    });
  },
};
