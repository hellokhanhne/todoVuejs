<template>
  <div class="d-flex loading" v-if="isLoading">
    <b-spinner class="spinner" variant="primary"></b-spinner>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Loading",
  computed: {
    ...mapGetters(["isLoading"]),
  },
};
</script>

<style>
.loading {
  justify-content: center;
  align-items: center;
  inset: 0;
  position: fixed;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.5);
}
.spinner {
  width: 100px;
  height: 100px;
}
</style>
