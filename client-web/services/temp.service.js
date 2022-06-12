import axios from "axios";
import store from "../store";
import { BACKEND_URL } from "../constants";

export const GetAllUsers = () => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.get(`${BACKEND_URL}/api/temp/get-all-users`, {
    headers: {
      token,
    },
  });
};

export const SignUpUser = async (body) => {
  return await axios.post(`${BACKEND_URL}/api/temp/sign-up`, body);
};

export const GetUserDetails = (_id) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.get(`${BACKEND_URL}/api/temp/get-user-details`, {
    headers: {
      token,
    },
  });
};

export const AddToCart = ({ _id, item_id }) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.post(
    `${BACKEND_URL}/api/temp/add-to-cart`,
    { _id, item_id },
    {
      headers: {
        token,
      },
    }
  );
};

export const ConfirmCart = () => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.post(
    `${BACKEND_URL}/api/temp/confirm-cart`,
    {},
    {
      headers: {
        token,
      },
    }
  );
};

export const GetTableInfo = (tableId) => {
  const { token } = store.getState().user;
  return axios.get(`${BACKEND_URL}/api/temp/get-table-info/${tableId}`, {
    headers: {
      token,
    },
  });
};
