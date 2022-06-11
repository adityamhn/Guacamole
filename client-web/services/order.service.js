import axios from "axios";
import store from "../app/store";
import { BACKEND_URL } from "../constants";

export const GetUserDetails = (_id) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.get(`${BACKEND_URL}/api/order/get-order-details`, {
    headers: {
      token,
    },
  });
};

export const AddItem = (body) => {
  const { token } = localStorage.getItem("token");
  if (!token) throw new Error("Token not found!");
  return axios.post(`${BACKEND_URL}/api/order/add-order`, body, {
    headers: {
      token,
    },
  });
};
