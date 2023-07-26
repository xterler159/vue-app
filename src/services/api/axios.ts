import axios from "axios";

const axiosInstance = axios.create({ baseURL: "https://jsonplaceholder.typicode.com" });

export const get = async (endpoint: string) => {
  const response = await axiosInstance.get(endpoint);
  if (response.status === 200) return response.data;
  return null;
};
