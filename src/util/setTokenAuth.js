import baseAPI from "../api/baseAPI";

export const setTokenAuth = (token) => {
  baseAPI.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
