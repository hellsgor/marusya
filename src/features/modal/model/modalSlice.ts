import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ModalType = 'trailer' | 'signIn' | 'signUp';
type AuthModalType = 'signIn' | 'signUp';

type ModalsState = Record<ModalType, boolean>;

interface ModalState {
  modals: ModalsState;
  options: {
    isSwitchingAuth: boolean;
  };
}

const initialState: ModalState = {
  modals: {
    trailer: false,
    signIn: false,
    signUp: false,
  },
  options: {
    isSwitchingAuth: false,
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalType>) => {
      Object.keys(state.modals).forEach((key) => {
        state.modals[key as ModalType] = false;
      });
      state.modals[action.payload] = true;
      state.options.isSwitchingAuth = false;
    },
    switchAuthModal: (state, action: PayloadAction<AuthModalType>) => {
      const wasSignIn = state.modals.signIn;
      const wasSignUp = state.modals.signUp;

      state.modals.signIn = false;
      state.modals.signUp = false;
      state.options.isSwitchingAuth = wasSignIn || wasSignUp;
      state.modals[action.payload] = true;
    },
    closeModal: (state, action: PayloadAction<ModalType>) => {
      state.modals[action.payload] = false;
      state.options.isSwitchingAuth = false;
    },
    closeAllModal: (state) => {
      Object.keys(state.modals).forEach((key) => {
        state.modals[key as ModalType] = false;
      });
      state.options.isSwitchingAuth = false;
    },
  },
});

export const { openModal, switchAuthModal, closeModal, closeAllModal } =
  modalSlice.actions;
export default modalSlice.reducer;
