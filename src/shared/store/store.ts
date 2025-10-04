import { configureStore } from '@reduxjs/toolkit';
import type { CreateStoreOptions } from './types';

export const createAppStore = ({
  reducers,
  middleware = [],
}: CreateStoreOptions) => {
  return configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(middleware),
  });
};
