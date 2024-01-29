import api from "../api";

export const login = async (data) => {
  return await api.post({
    secured: false,
    loader: true,
    path: "auth/login",
    data: data,
  });
};

export const registerUser = async (data) => {
  return await api.post({
    secured: false,
    loader: true,
    path: "auth/register ",
    data: data,
  });
};

export const getGlobalData = async (data) => {
  return await api.get({
    secured: false,
    loader: true,
    path: "global-public?populate=*",
    data: data,
  });
};
