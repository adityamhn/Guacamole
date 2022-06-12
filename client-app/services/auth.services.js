import axios from "axios";
import { BACKEND_URL } from "../constants";

export const SignInUser = (body) => {
  return axios.post(`${BACKEND_URL}/api/user/sign-in`, body);
};

export const SignUpUser = async (body) => {
  return await axios.post(`${BACKEND_URL}/api/user/sign-up`, body);
};
