import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import type { SuccessCreateModel, UserModel } from '../models';
import { userService } from '../api/userService';

export function useRegistration(onSuccessReset?: () => void) {
  return useMutation<SuccessCreateModel, AxiosError, UserModel>({
    mutationFn: (data) => userService.create(data),
    onSuccess: (data) => {
      if (data.success && onSuccessReset) {
        onSuccessReset();
      }
    },
  });
}
