import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ENV_CONFIG } from '@/shared/config';

const baseQuery = fetchBaseQuery({
  baseUrl: ENV_CONFIG.API_URL,
  credentials: 'include',
  prepareHeaders: (headers) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
  fetchFn: async (input, init) => {
    const url = typeof input === 'string' ? input : input.url;
    const fullUrl = url.startsWith('http')
      ? url
      : `${ENV_CONFIG.API_URL}${url}`;

    const response = await fetch(fullUrl, {
      ...init,
      credentials: 'include',
      mode: 'cors',
      headers: {
        ...init?.headers,
        'Content-Type': 'application/json',
      },
    });

    return response;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['genres', 'movies', 'currentMovie', 'user'],
  endpoints: () => ({}),
});
