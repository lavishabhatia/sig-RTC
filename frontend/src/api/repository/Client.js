import api from "../api";

export const getClientListing = async () => {
  return await api.get({
    secured: true,
    loader: true,
    path: `users`,
  });
};


export const singleClient = async ({id}) => {
  return await api.get({
    secured : true,
    loader:true,
    path: `payment-logs/client/${id}`
  })
}