<template>
  <div class="d-flex justify-content-center align-items-center mt-5">
    <a
      href="https://github.com/hellokhanhne/todoVuejs"
      target="_blank"
      class="btn btn-primary"
      >Download source code in Github.com</a
    >
  </div>
</template>

<script>
export default {
  name: "About",
  mounted: function () {
    const _this = this;
    this.$nextTick(function () {
      _this.$store.commit("SET_LOADING", false);
    });
  },
};
</script>

<style></style>
