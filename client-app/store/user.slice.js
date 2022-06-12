import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoggedIn: false,
    cart: [],
    restaurantId: null,
    token: "",
    tableId: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.restaurantId = action.payload.restaurantId;
      state.cart = action.payload.cart;
      state.tableId = action.payload.tableId;
    },
    update: (state, action) => {
      const prevUser = state.user;
      state.user = { ...prevUser, ...action.payload };
    },
    logout: (state, action) => {
      state.user = null;
      state.isLoggedIn = false;
      state.token = "";
      state.restaurantId = null;
      state.cart = [];
      state.tableId = null;
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
    updateRestaurantId: (state, action) => {
      state.restaurantId = action.payload;
    },
  },
});

export const { login, update, logout, updateRestaurantId, updateCart } =
  userSlice.actions;
export default userSlice.reducer;
