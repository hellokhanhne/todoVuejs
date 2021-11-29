<template>
  <div>
    <b-button
      id="addBtn"
      v-if="isAuthenticated"
      class="btn-add-todo"
      variant="success"
      @click="showModal"
    >
      <b-icon icon="plus-circle-fill"></b-icon>
    </b-button>
    <b-tooltip target="addBtn" triggers="hover" variant="success">
      Add skill to learn
    </b-tooltip>
    <div class="modal fade show" v-if="show">
      <b-form @submit.prevent="submitForm">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Create skill to learn</h5>
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
                required
              ></b-form-input>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                @click="hideModal"
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Create to learn
              </button>
            </div>
          </div>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ModalCreate",
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
        url: "",
      },

      show: false,
    };
  },
  methods: {
    showModal() {
      this.show = true;
    },
    hideModal() {
      this.show = false;
    },
    submitForm() {
      this.$store.dispatch("createPost", this.form);
      this.hideModal();
      this.form.title = "";
      this.form.description = "";
      this.form.url = "";
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
