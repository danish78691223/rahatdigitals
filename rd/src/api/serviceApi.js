import API from "./axios";

export const fetchServices = async () => {
  const res = await API.get("/services");
  return res.data;
};

export const fetchServiceDetails = async (id) => {
  const res = await API.get(`/services/${id}`);
  return res.data;
};
