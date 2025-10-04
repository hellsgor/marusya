import { api } from '@/shared/api/';
import { createAppStore } from '@/shared/store';

export const store = createAppStore({
  reducers: {
    [api.reducerPath]: api.reducer,
  },
  middleware: [api.middleware],
});
