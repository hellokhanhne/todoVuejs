import baseAPI from "./baseAPI";

const authAPI = {
  register(payload) {
    return baseAPI.post("/auth/register", payload);
  },
  login(payload) {
    return baseAPI.post("/auth/login", payload);
  },
  checkToken() {
    return baseAPI.get("/auth");
  },
};

export default authAPI;
