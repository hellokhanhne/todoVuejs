import postAPI from "../../api/postAPI";
import { showToast } from "../../util/toast";

const post = {
  state: {
    posts: [],
  },
  mutations: {
    GET_POST(state, payload) {
      state.posts = payload.posts;
    },
    CREATE_POST(state, payload) {
      state.posts.push(payload.post);
    },
    DELETE_POST(state, payload) {
      state.posts = state.posts.filter((post) => post._id !== payload._id);
    },
    UPDATE_POST(state, payload) {
      state.posts = state.posts.map((post) => {
        if (post._id === payload.post._id) {
          post = payload.post;
        }
        return post;
      });
    },
  },
  actions: {
    async getPosts({ commit }) {
      try {
        const res = await postAPI.getPosts();
        commit("SET_LOADING", false);
        commit("GET_POST", {
          posts: res.data.posts,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async createPost({ commit }, payload) {
      console.log(payload);
      try {
        const res = await postAPI.createPost(payload);
        showToast("Success", "Create post successfully !", "success");
        commit("CREATE_POST", {
          post: res.data.post,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async deletePost({ commit }, id) {
      try {
        await postAPI.deleletePost(id);
        showToast("Success", "Delete post successfully !", "success");
        commit("DELETE_POST", {
          _id: id,
        });
      } catch (error) {
        console.log(error);
      }
    },
    async updatePostAction({ commit }, payload) {
      try {
        const res = await postAPI.updatePost(payload.id, payload);
        commit("RESET_UPDATE_MODAL");
        showToast("Success", "Update post successfully !", "success");
        commit("UPDATE_POST", {
          post: res.data.post,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  getters: {
    posts(state) {
      return state.posts;
    },
  },
};

export default post;
