import axios from "axios";
import store from "../store/index";
import { BACKEND_URL } from "../constants";

export const GetOrderDetails = (tableId) => {
  const { token } = store.getState().user;

  return axios.get(`${BACKEND_URL}/api/order/get-order-details/${tableId}`, {
    headers: {
      token,
    },
  });
};

export const AddOrder = (body) => {
  // get token from store
  const { token } = store.getState().user;
  return axios.post(`${BACKEND_URL}/api/order/add-order`, body, {
    headers: {
      token,
    },
  });
};
