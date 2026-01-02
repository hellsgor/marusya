import { MAX_SEARCH_COUNT } from '../config';
import {
  SearchDTOSchema,
  type SearchType,
  type SearchDTOType,
} from '../model/types';

import { api, checkResponse } from '@/shared/api';

const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query<SearchDTOType, SearchType>({
      query: ({ string }) => `/movie?count=${MAX_SEARCH_COUNT}&title=${string}`,
      transformResponse: (response: unknown, _meta, { string }) => {
        return checkResponse(
          response,
          SearchDTOSchema,
          `Ошибка при валидации результатов поиска по строке "${string}"`,
        );
      },
    }),
  }),
});

export const { useSearchQuery } = searchApi;
