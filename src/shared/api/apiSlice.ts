import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ENV_CONFIG } from '@/shared/config';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: ENV_CONFIG.API_URL,
    credentials: 'include',
    mode: 'cors',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
    fetchFn: async (input, init) => {
      const response = await fetch(input, {
        ...init,
        credentials: 'include',
        mode: 'cors',
      });
      return response;
    },
  }),
  tagTypes: ['genres', 'movies', 'currentMovie', 'user'],
  endpoints: () => ({}),
});
