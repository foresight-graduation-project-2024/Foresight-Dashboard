import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',

  initialState: {
    isLoading: false,
  },

  reducers: {
    uiStartLoading: (state) => {
      state.isLoading = true;
    },
    uiStopLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { uiStartLoading, uiStopLoading } = uiSlice.actions;

export default uiSlice.reducer;
