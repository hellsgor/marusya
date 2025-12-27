import type { SignInFormDataType } from '../model/SignInFormData';
import type { SignInResultType } from '../model/SignInResult';

import { api } from '@/shared/api';
import { SignInResultSchema } from '../model/SignInResult';

export const signInApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<SignInResultType, SignInFormDataType>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['user'],
      transformResponse: (response: unknown): SignInResultType => {
        const result = SignInResultSchema.safeParse(response);

        if (!result.success) {
          throw new Error(`Ошибка валидации ответа сервера: ${result.error}`);
        }

        return result.data;
      },
    }),
  }),
});

export const { useSignInMutation } = signInApi;
