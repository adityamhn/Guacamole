import axios from "axios";
import store from "../app/store";
import { BACKEND_URL } from "../constants";

export const GetAllTables = () => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.get(`${BACKEND_URL}/api/table/get-all-tables`, {
    headers: {
      token,
    },
  });
};

export const GetTableDetails = (_id) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.post(`${BACKEND_URL}/api/table/get-table-details`, body, {
    headers: {
      token,
    },
  });
};

export const AddTable = (r_id) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.post(`${BACKEND_URL}/api/table/add-table`, body, {
    headers: {
      token,
    },
  });
};

export const DeleteTable = (_id, r_id) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.post(`${BACKEND_URL}/api/table/delete-table`, body, {
    headers: {
      token,
    },
  });
};

export const MakeFree = (_id) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.post(`${BACKEND_URL}/api/table/make-free`, body, {
    headers: {
      token,
    },
  });
};

export const AddUser = (_id, r_id, u_id) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.post(`${BACKEND_URL}/api/table/add-user`, body, {
    headers: {
      token,
    },
  });
};

export const RemoveUser = (_id) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.post(`${BACKEND_URL}/api/table/remove-user`, body, {
    headers: {
      token,
    },
  });
};
