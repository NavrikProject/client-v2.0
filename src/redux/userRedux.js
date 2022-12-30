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
      state.currentUser = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.error = null;
      toast.success("You are successfully logging in you", {
        position: "top-center",
      });
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = action.payload;
      state.isAuthenticated = false;
      toast.error("There is some error, please try again later", {
        position: "top-center",
      });
    },
    logOut: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
      toast.warning("You are successfully logged out", {
        position: "top-center",
      });
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
  userSlice.actions;

export default userSlice.reducer;
