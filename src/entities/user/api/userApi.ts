import { api } from '@/shared/api';
import { UserDTOSchema, type User } from '../model/user';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      query: () => `/profile`,
      providesTags: [{ type: 'user', id: 'profile' }],
      transformResponse: (response: unknown) => {
        const result = UserDTOSchema.safeParse(response);

        if (!result.success) {
          throw new Error(`Ошибка запроса пользователя: ${result.error}`);
        }

        return result.data;
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
