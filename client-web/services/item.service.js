import axios from "axios";
// import store from "../app/store";
import { BACKEND_URL } from "../constants";

export const AddItem = (body) => {
  const { token } = localStorage.getItem("token");
  if (!token) throw new Error("Token not found!");
  return axios.post(`${BACKEND_URL}/api/item/add-item`, body, {
    headers: {
      token,
    },
  });
};

export const GetItemByRestaurantId = (body) => {
  return axios.post(`${BACKEND_URL}/api/item/get-item-by-restaurant-id`, body);
};
