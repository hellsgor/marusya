import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import type { SuccessModel as SuccessModel, UserModel } from '../models';
import { userService } from '../api/userService';

export function useRegistration(onSuccessReset?: () => void) {
  return useMutation<SuccessModel, AxiosError, UserModel>({
    mutationFn: (data) => userService.create(data),
    onSuccess: (data) => {
      if (data.result && onSuccessReset) {
        onSuccessReset();
      }
    },
  });
}
