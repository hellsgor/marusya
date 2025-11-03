import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface ModalState {
  trailer: boolean;
}

const initialState: ModalState = {
  trailer: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<keyof ModalState>) => {
      state[action.payload] = true;
    },
    closeModal: (state, action: PayloadAction<keyof ModalState>) => {
      state[action.payload] = false;
    },
    closeAllModal: (state) => {
      Object.keys(state).forEach((key) => {
        state[key as keyof ModalState] = false;
      });
    },
  },
});

export const { openModal, closeModal, closeAllModal } = modalSlice.actions;
export default modalSlice.reducer;
