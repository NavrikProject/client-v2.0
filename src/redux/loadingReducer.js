import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    showLoadingHandler: (state) => {
      state.isLoading = true;
    },
    hideLoadingHandler: (state) => {
      state.isLoading = false;
    },
  },
});

export const { showLoadingHandler, hideLoadingHandler } = loadingSlice.actions;
export default loadingSlice.reducer;
