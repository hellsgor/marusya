import { SuccessLoginSchema, type LoginModel } from '../models/User';
import { apiClient } from './apiClient';

export const userService = {
  login: async (data: LoginModel) => {
    return apiClient(SuccessLoginSchema, {
      method: 'POST',
      url: '/auth/login',
      data,
    });
  },
};
