<template>
  <b-container
    fluid
    class="d-flex justify-content-center align-items-center auth-wrapper"
  >
    <div class="auth-contain">
      <h1>Learn it</h1>
      <h5 class="mb-3">Keep track of your learn</h5>
      <div class="form-wrapper">
        <router-view></router-view>
      </div>

      <div class="auth-wrapper-bottom">
        <span class="mr-3" v-if="isLoginPage">Don't have account</span>
        <span class="mr-3" v-else>Have ready an account</span>

        <router-link to="/register" v-if="isLoginPage"
          ><b-button size="sm" variant="primary"
            >Register</b-button
          ></router-link
        >
        <router-link to="/login" v-else
          ><b-button size="sm" variant="primary">Login</b-button></router-link
        >
      </div>
    </div>
  </b-container>
</template>

<script>
import store, { authData } from "../store";
export default {
  name: "Auth",
  computed: {
    isLoginPage() {
      return this.$route.name === "Login" || false;
    },
  },
  async beforeRouteEnter(to, from, next) {
    const { isAuthenticated } = authData;
    if (isAuthenticated) {
      return next({ name: "Dashboard" });
    } else if (localStorage.getItem("accessToken")) {
      await store.dispatch("checkToken");
      return next({ name: "Dashboard" });
    }
    next();
  },
  mounted: function () {
    const _this = this;
    this.$nextTick(function () {
      _this.$store.commit("SET_LOADING", false);
    });
  },
};
</script>

<style>
.auth-wrapper {
  height: 100vh;
  width: 100%;
  background-image: url("https://d585tldpucybw.cloudfront.net/sfimages/default-source/labs/kendo/2020-revamp/vue-bg.jpg?v=2");
}
.auth-contain {
  width: 350px;
  text-align: center;
  color: white;
}
.auth-contain h1 {
  color: white;
}
.auth-contain h5 {
  color: #b9aeae;
}
</style>
