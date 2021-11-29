const loading = {
  state: {
    isLoading: true,
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
  },
  mutations: {
    SET_LOADING: (state, payload) => (state.isLoading = payload),
  },
};

export default loading;
