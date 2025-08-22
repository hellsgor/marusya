import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { ProfileModel } from '../models';

type AuthStatus = 'idle' | 'loading' | 'authenticated' | 'unauthenticated';

interface AuthState {
  user: ProfileModel | null;
  isLoggedIn: boolean;
  status: AuthStatus;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
  status: 'idle',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<ProfileModel>) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.status = 'authenticated';
    },

    setStatus(state, action: PayloadAction<AuthStatus>) {
      state.status = action.payload;
    },

    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, setStatus, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
