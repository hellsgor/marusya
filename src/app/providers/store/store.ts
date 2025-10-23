import { currentMovieReducer } from '@/features/current-movie';
import { api } from '@/shared/api/';
import { createAppStore } from '@/shared/store';

export const store = createAppStore({
  reducers: {
    [api.reducerPath]: api.reducer,
    currentMovie: currentMovieReducer,
  },
  middleware: [api.middleware],
});
