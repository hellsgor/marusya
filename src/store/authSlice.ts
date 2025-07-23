import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { UserModel } from '../models';

interface AuthState {
  user: UserModel | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserModel>) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
