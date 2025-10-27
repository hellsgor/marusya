import {
  useSelector,
  type TypedUseSelectorHook,
  type DefaultRootState,
} from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<DefaultRootState> =
  useSelector;
