import type { SignInFormDataType } from '../model/SignInFormData';
import type { SignInResultType } from '../model/SignInResult';

import { api, checkResponse } from '@/shared/api';
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
        return checkResponse(
          response,
          SignInResultSchema,
          'Ошибка валидации ответа сервера при авторизации',
        );
      },
    }),
  }),
});

export const { useSignInMutation } = signInApi;
