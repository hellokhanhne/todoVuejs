import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://glacial-river-91159.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor
axiosConfig.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    throw error.response.data;
  }
);

export default axiosConfig;
