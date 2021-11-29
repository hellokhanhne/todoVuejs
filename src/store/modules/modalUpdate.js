const modalUpdate = {
  state: {
    post: null,
    show: false,
  },
  mutations: {
    SET_DATA_UPDATE_MODAL(state, payload) {
      state.show = true;
      state.post = payload.post;
    },
    RESET_UPDATE_MODAL(state) {
      state.post = null;
      state.show = false;
    },
  },
  getters: {
    postUpdateModal(state) {
      return state.post;
    },
    showModalUpdate(state) {
      return state.show;
    },
  },
};

export default modalUpdate;
