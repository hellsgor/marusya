import { movieApi, type MovieModel } from '@/entities/movie';
import { createSlice } from '@reduxjs/toolkit';

interface CurrentMovieState {
  movie: MovieModel | null;
}

const initialState: CurrentMovieState = { movie: null };

const currentMovieSlice = createSlice({
  name: 'currentMovie',
  initialState,
  reducers: {
    clearCurrentMovie: (state) => {
      state.movie = null;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      movieApi.endpoints.getById.matchFulfilled,
      (state, action) => {
        state.movie = action.payload;
      },
    );
  },
});

export const { clearCurrentMovie } = currentMovieSlice.actions;
export default currentMovieSlice.reducer;
