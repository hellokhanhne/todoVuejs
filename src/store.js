import Vue from "vue";
import Vuex from "vuex";
import auth from "./store/modules/auth";
import loading from "./store/modules/loading";
import post from "./store/modules/post";
import modalUpdate from "./store/modules/modalUpdate";

Vue.use(Vuex);

export const authData = {
  isAuthenticated: false,
};

const store = new Vuex.Store({
  modules: {
    auth,
    loading,
    post,
    modalUpdate,
  },
  state: {},
  actions: {},
  getters: {},
  mutations: {},
});

export default store;
