import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "model",
  initialState: {
    isShowingModel: false,
  },
  reducers: {
    showModelHandler: (state) => {
      state.isShowingModel = true;
    },
    hideModelHandler: (state) => {
      state.isShowingModel = false;
    },
  },
});
export const { showModelHandler, hideModelHandler } = modelSlice.actions;
export default modelSlice.reducer;
