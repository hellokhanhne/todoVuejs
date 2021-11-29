<template>
  <div id="app">
    <Navbar v-if="isAuthenticated" />
    <Loading />
    <router-view />
  </div>
</template>

<script>
import Loading from "./components/Loading.vue";
import Navbar from "./components/Navbar.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: { Loading, Navbar },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-position: center;
  background-size: cover;
}
.btn-add-todo {
  position: fixed;
  bottom: 30px;
  font-size: 1.3rem;
  right: 50px;
}
.row {
  margin-left: 0;
  margin-right: 0;
}
</style>
