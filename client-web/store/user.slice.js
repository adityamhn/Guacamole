import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
    cart: [],
    restaurantId: null,
    token: "",
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    update: (state, action) => {
      const prevUser = state.user;
      state.user = { ...prevUser, ...action.payload };
    },
    logout: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    updateRestaurantId: (state, action) => {
      state.restaurantId = action.payload;
    },
  },
});

export const { login, update, logout, updateProgram, redirectUrl } =
  userSlice.actions;
export default userSlice.reducer;
