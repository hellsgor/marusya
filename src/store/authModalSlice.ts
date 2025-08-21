import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ModalType = 'login' | 'register' | 'thanks' | null;

const authModalSlice = createSlice({
  name: 'authModal',
  initialState: null as ModalType,
  reducers: {
    closeModal: () => null,
    openModal: (_, action: PayloadAction<ModalType>) => action.payload,
  },
});

export const { closeModal, openModal } = authModalSlice.actions;
export const authModalReducer = authModalSlice.reducer;
