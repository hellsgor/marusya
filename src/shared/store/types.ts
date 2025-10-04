import type { Middleware, ReducersMapObject } from '@reduxjs/toolkit';
import type { createAppStore } from './store';

export interface CreateStoreOptions {
  reducers: ReducersMapObject;
  middleware?: Middleware[];
}

export type AppStore = ReturnType<typeof createAppStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
