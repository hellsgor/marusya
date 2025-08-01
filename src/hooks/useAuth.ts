import { useMutation } from '@tanstack/react-query';
import type { LoginModel } from '../models/User';
import { userService } from '../api/userService';

export function useAuth(onSuccessReset: () => void) {
  return useMutation({
    mutationFn: (data: LoginModel) => userService.login(data),
    onSuccess: (data) => {
      if (data.result) {
        onSuccessReset();
      }
    },
  });
}
