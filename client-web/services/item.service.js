import axios from "axios";
import store from "../app/store";
import { BACKEND_URL } from "../constants";

export const AddItem = (body) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.post(`${BACKEND_URL}/api/item/add-item`, body, {
    headers: {
      token,
    },
  });
};

export const GetItemByRestaurantId = (body) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.post(`${BACKEND_URL}/api/item/get-item-by-restaurant-id`, body, {
    headers: {
      token,
    },
  });
};

export const UpdateItem = (body) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.post(`${BACKEND_URL}/api/item/update-item`, body, {
    headers: {
      token,
    },
  });
};

export const DeleteItem = (body) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.post(`${BACKEND_URL}/api/item/delete-item`, body, {
    headers: {
      token,
    },
  });
};
