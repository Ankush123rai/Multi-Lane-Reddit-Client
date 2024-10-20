import { createSlice } from '@reduxjs/toolkit';

export const lanesSlice = createSlice({
  name: 'lanes',
  initialState: {
    subreddits: [],
    error: null,
  },
  reducers: {
    addLane: (state, action) => {
      const subreddit = action.payload.toLowerCase();
      if (!state.subreddits.includes(subreddit)) {
        state.subreddits.push(subreddit);
        state.error = null; 
      } else {
        state.error = `Subreddit "${subreddit}" already added.`;
      }
    },
    removeLane: (state, action) => {
      state.subreddits = state.subreddits.filter(
        (subreddit) => subreddit !== action.payload
      );
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { addLane, removeLane, clearError } = lanesSlice.actions;

export default lanesSlice.reducer;
