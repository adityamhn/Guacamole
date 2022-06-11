import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
    cart: [],
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    update: (state, action) => {
      const prevUser = state.user;
      state.user = { ...prevUser, ...action.payload };
    },
    logout: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    addToCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const { login, update, logout, updateProgram, redirectUrl } =
  userSlice.actions;
export default userSlice.reducer;
