import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isFetching: false,
    currentUser: null,
    error: null,
    isAuthenticated: false,
  },

  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.currentUser = null;
      state.error = null;
      state.isAuthenticated = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.isAuthenticated = true;
      state.currentUser = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.error = null;
      toast.success("You are successfully logging in you", {
        position: "top-center",
      });
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.isAuthenticated = false;
      state.currentUser = null;
      state.error = action.payload;
      toast.error("There is some error, please try again later", {
        position: "top-center",
      });
    },
    logOut: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.isAuthenticated = false;
      state.error = null;
      toast.warning("You are successfully logged out", {
        position: "top-center",
      });
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
  userSlice.actions;

export default userSlice.reducer;
