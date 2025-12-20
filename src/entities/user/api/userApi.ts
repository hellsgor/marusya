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
  }),
});

export const { useGetUserQuery } = userApi;
