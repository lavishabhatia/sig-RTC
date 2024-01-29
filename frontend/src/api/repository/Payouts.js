import api from "../api";

export const getPlans = async (tag) => {
  return await api.get({
    secured: true,
    loader: true,
    path: `/plans?tag=${tag}`,
  });
};
