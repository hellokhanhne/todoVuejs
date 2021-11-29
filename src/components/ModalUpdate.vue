<template>
  <div class="modal fade show">
    <b-form @submit.prevent="submitForm">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Update skill to learn</h5>
          </div>
          <div class="modal-body">
            <b-form-input
              class="mb-3"
              v-model="form.title"
              type="text"
              placeholder="Enter title"
              required
            ></b-form-input>
            <b-form-textarea
              class="mb-3"
              v-model="form.description"
              placeholder="Enter description"
              required
              rows="4"
            ></b-form-textarea>
            <b-form-input
              v-model="form.url"
              type="text"
              placeholder="Enter URL"
              class="mb-3"
              required
            ></b-form-input>
            <b-form-select
              v-model="form.status"
              :options="options"
            ></b-form-select>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="hideModal">
              Close
            </button>
            <button type="submit" class="btn btn-primary">Save change</button>
          </div>
        </div>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "ModelUpdate",
  data() {
    const post = this.$store.state.modalUpdate.post;
    let form = {
      title: post.title,
      description: post.description,
      status: post.status,
      url: post.url,
      id: post._id,
    };
    return {
      form,
      options: [
        { value: "TO LEARN", text: "TO LEARN" },
        { value: "LEARNING", text: "LEARNING" },
        { value: "LEARNED", text: "LEARNED" },
      ],
    };
  },

  methods: {
    submitForm() {
      this.$store.dispatch("updatePostAction", this.form);
    },
    hideModal() {
      this.$store.commit("RESET_UPDATE_MODAL");
    },
  },
};
</script>

<style scoped>
.modal {
  background: rgba(0, 0, 0, 0.3);
}
.show {
  display: block !important;
}
</style>
