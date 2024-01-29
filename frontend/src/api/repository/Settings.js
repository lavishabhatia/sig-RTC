import api from "../api";

export const razorIntegrate = async (data) => {
  return await api.put({
    data: data,
    secured: true,
    loader: true,
    path: "global",
  });
};
