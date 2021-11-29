import baseAPI from "./baseAPI";

const postAPI = {
  getPosts() {
    return baseAPI.get("/posts");
  },
  getPost(id) {
    return baseAPI.get(`/posts/${id}`);
  },
  createPost(payload) {
    return baseAPI.post("/posts", payload);
  },
  updatePost(id, payload) {
    return baseAPI.put(`/posts/${id}`, payload);
  },
  deleletePost(id) {
    return baseAPI.delete(`/posts/${id}`);
  },
};

export default postAPI;
