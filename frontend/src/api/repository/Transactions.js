import api from "../api";

export const getTransactions = async ({ page, size }) => {
  return await api.get({
    secured: true,
    loader: true,
    path: `/payment-logs?pagination[page]=${page}&pagination[size]=${size}`,
  });
};


