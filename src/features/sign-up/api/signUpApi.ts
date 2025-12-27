import type { SignUpFormDataType } from '../model/SignUpFormData';
import type { SignUpResultType } from '../model/SignUpResult';

import { api } from '@/shared/api';
import { SignUpApiRequestSchema } from '../model/SignUpFormData';
import { SignUpResultSchema } from '../model/SignUpResult';

export const signUpApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation<SignUpResultType, SignUpFormDataType>({
      query: (body) => {
        // Формируем данные для API без confirmPassword
        const apiRequestData = {
          email: body.email,
          name: body.name,
          surname: body.surname,
          password: body.password,
        };

        // Валидируем данные для API
        const apiValidationResult =
          SignUpApiRequestSchema.safeParse(apiRequestData);

        if (!apiValidationResult.success) {
          throw new Error(
            `Ошибка валидации данных для API: ${apiValidationResult.error.message}`,
          );
        }

        return {
          url: '/user',
          method: 'POST',
          body: apiValidationResult.data,
        };
      },
      transformResponse: (response: unknown): SignUpResultType => {
        const result = SignUpResultSchema.safeParse(response);

        if (!result.success) {
          throw new Error(
            `Ошибка валидации ответа сервера: ${result.error.message}`,
          );
        }

        return result.data;
      },
    }),
  }),
});

export const { useSignUpMutation } = signUpApi;
