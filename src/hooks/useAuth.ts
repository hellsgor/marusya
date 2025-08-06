import { useMutation } from '@tanstack/react-query';
import type { LoginModel, SuccessLoginModel } from '../models/User';
import { userService } from '../api/userService';
import type { AxiosError } from 'axios';

export function useAuth(onSuccessReset: () => void) {
  return useMutation<SuccessLoginModel, AxiosError, LoginModel>({
    mutationFn: (data) => userService.login(data),
    onSuccess: (data) => {
      if (data.result) {
        onSuccessReset();
      }
    },
  });
}
