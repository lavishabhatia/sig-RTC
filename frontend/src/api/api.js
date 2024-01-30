import axios from "axios";
import {
  responseErrorInterceptor,
  responseSuccessInterceptor,
} from "./interceptors";
// import state from "../state";

export const BASE_URL =
  "https://b906-2405-201-300f-bec-c0e-2b20-1464-abb.ngrok-free.app";
const API_BASE_URL = `${BASE_URL}/api`;

const instance = ({ key, loader }) => {
  let axiosInstance = axios.create({
    baseURL: API_BASE_URL,
  });

  if (key) {
    axiosInstance.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${localStorage.getItem("token")}`;
  }

  axiosInstance.interceptors.response.use(
    responseSuccessInterceptor,
    responseErrorInterceptor
  );

  axiosInstance.interceptors.request.use(
    (config) => {
      if (loader) {
        // state.loading = true;
      }
      return config;
    },
    (err) => err
  );
  return axiosInstance;
};

const get = async ({ secured, loader, path }) => {
  const apiIntance = instance({ key: secured, loader: loader ? true : false });
  return await apiIntance.get(path);
};

const post = async ({ secured, loader, path, data }) => {
  const apiIntance = instance({ key: secured, loader: loader ? true : false });
  return apiIntance.post(path, data);
};

const patch = async ({ secured, loader, path, data }) => {
  const apiIntance = instance({ key: secured, loader: loader ? true : false });
  return apiIntance.patch(path, data);
};

const del = async ({ secured, loader, path }) => {
  const apiIntance = instance({ key: secured, loader: loader ? true : false });
  return apiIntance.delete(path);
};

const put = async ({ secured, loader, path, data }) => {
  const apiIntance = instance({ key: secured, loader: loader ? true : false });
  return apiIntance.put(path, data);
};

const api = {
  get,
  post,
  patch,
  put,
  del,
};

export default api;
