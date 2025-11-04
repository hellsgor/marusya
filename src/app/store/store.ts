import { modalReducer } from '@/features/modal';
import { api } from '@/shared/api/';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

declare module 'react-redux' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface DefaultRootState extends RootState {}
}
