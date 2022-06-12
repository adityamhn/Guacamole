import axios from "axios";
// import store from "../app/store";
import { BACKEND_URL } from "../constants";

export const GetAllRestaurants = async () => {
  return await axios.get(`${BACKEND_URL}/api/restaurant/get-all-restaurants`, {
    headers: {
      token,
    },
  });
};

export const SignInRestaurant = (body) => {
  return axios.post(`${BACKEND_URL}/api/restaurant/sign-in`, body);
};

export const SignUpRestaurant = async (body) => {
  return await axios.post(`${BACKEND_URL}/api/restaurant/sign-up`, body);
};

export const UpdateRestaurantDetails = (body) => {
  const { token } = store.getState().auth;
  if (!token) throw new Error("Token not found!");
  return axios.put(
    `${BACKEND_URL}/api/restaurant/update-restaurant-details`,
    body,
    {
      headers: {
        token,
      },
    }
  );
};

export const CheckSignedIn = () => {
  const { token } = store.getState().auth;
  return axios.get(`${BACKEND_URL}/api/restaurant/check-signed-in`, {
    headers: {
      token,
    },
  });
};

export const GetRestaurantDetails = (_id) => {
  return axios.post(`${BACKEND_URL}/api/restaurant/get-restaurant-details`, {
    _id,
  });
};
