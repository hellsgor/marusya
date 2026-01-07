import type { User } from '../model/user';

import { api, checkResponse } from '@/shared/api';
import { UserDTOSchema } from '../model/user';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => `/profile`,
      providesTags: [{ type: 'user', id: 'profile' }],
      transformResponse: (response: unknown) => {
        return checkResponse(
          response,
          UserDTOSchema,
          'Ошибка запроса пользователя',
        );
      },
    }),
    logout: builder.mutation<void, void>({
      query: () => ({ url: '/auth/logout', method: 'GET' }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } finally {
          dispatch(api.util.resetApiState());
        }
      },
    }),
  }),
});

export const { useGetUserQuery, useLogoutMutation } = userApi;
