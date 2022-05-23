import axios from "axios";

const config = {
  baseURL: process.env.REACT_APP_BASE_URL,
};

let client = axios.create(config);
client.defaults.withCredentials = true;
client.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth-token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default client;
