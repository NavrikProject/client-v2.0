import { createSlice } from "@reduxjs/toolkit";
const scrollModelSlice = createSlice({
  name: "scrollModel",
  initialState: {
    isShowingScrollModel: false,
  },
  reducers: {
    showScrollModelHandler: (state) => {
      state.isShowingScrollModel = true;
    },
    hideScrollModelHandler: (state) => {
      state.isShowingScrollModel = false;
    },
  },
});
export const { showScrollModelHandler, hideScrollModelHandler } =
  scrollModelSlice.actions;
export default scrollModelSlice.reducer;
