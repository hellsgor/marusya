import { useMutation } from '@tanstack/react-query';
import type { LoginModel, SuccessModel } from '../models';
import { userService } from '../api/userService';
import type { AxiosError } from 'axios';

export function useAuth(onSuccessReset: () => void) {
  return useMutation<SuccessModel, AxiosError, LoginModel>({
    mutationFn: (data) => userService.login(data),
    onSuccess: (data) => {
      if (data.result) {
        onSuccessReset();
      }
    },
  });
}
