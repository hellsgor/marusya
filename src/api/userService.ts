import { ProfileSchema } from '../models';
import {
  SuccessLoginSchema,
  UserSchema,
  type LoginModel,
  type UserModel,
} from '../models';
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
  create: async (data: UserModel) => {
    return apiClient(UserSchema, {
      method: 'POST',
      url: '/user',
      data,
      withCredentials: true,
    });
  },
};
