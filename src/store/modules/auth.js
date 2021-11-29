import authAPI from "../../api/authAPI";
import { authData } from "../../store";
import { setTokenAuth } from "../../util/setTokenAuth";
import { showToast } from "../../util/toast";

const auth = {
  state: {
    isLoading: true,
    user: null,
    isAuthenticated: false,
  },

  mutations: {
    AUTH_CHANGE(state, payload) {
      state.isAuthenticated = payload.isAuthenticated;
      state.user = payload.user;
      state.isLoading = payload.isLoading;
    },
  },
  actions: {
    async register({ commit, dispatch }, payload) {
      try {
        const res = await authAPI.register(payload);
        setTokenStorage(res.data.accessToken);
        await dispatch("checkToken");
        showToast("Success", "Register successfully !", "success");
      } catch (error) {
        showToast("Fail", error.message, "danger");
        commitFailAuth(commit);
      }
    },
    async login({ commit, dispatch }, payload) {
      try {
        const res = await authAPI.login(payload);
        setTokenStorage(res.data.successToken);
        await dispatch("checkToken");
        showToast("Success", "Login successfully !", "success");
      } catch (error) {
        showToast("Fail", error.message, "danger");
        commitFailAuth(commit);
      }
    },
    logout({ commit }) {
      localStorage.removeItem("accessToken");
      authData.isAuthenticated = false;
      commitFailAuth(commit);
    },
    async checkToken({ commit }) {
      try {
        const accessToken = localStorage.getItem("accessToken");
        if (!accessToken) {
          setTokenAuth(null);
          return;
        }
        setTokenAuth(accessToken);
        const res = await authAPI.checkToken();
        authData.isAuthenticated = true;
        commitSuccessAuth(commit, res.data.user);
      } catch (error) {
        removeTokenStorage();
        setTokenAuth(null);
        commitFailAuth(commit);
      }
    },
  },
  getters: {
    isAuthenticated: ({ isAuthenticated }) => {
      return isAuthenticated;
    },
  },
};

const commitSuccessAuth = (commit, user) => {
  return commit("AUTH_CHANGE", {
    isLoading: false,
    isAuthenticated: true,
    user,
  });
};

const commitFailAuth = (commit) => {
  return commit("AUTH_CHANGE", {
    isLoading: false,
    user: null,
    isAuthenticated: false,
  });
};

const setTokenStorage = (token) => {
  localStorage.setItem("accessToken", token);
};

const removeTokenStorage = () => {
  localStorage.removeItem("accessToken");
};

export default auth;
