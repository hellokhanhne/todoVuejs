<template>
  <b-navbar type="dark" class="navbar">
    <b-navbar-brand class="navbar-left">
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/code-280-460136.png"
        alt=""
      />
      <h4>Learn it</h4>
    </b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link to="/dashboard"><b>Dashboard</b></router-link>
        <router-link to="/about"><b>About</b></router-link>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto navbar-right">
        <b>Welcome to {{ user.username }} developer</b>
        <b-button variant="danger " @click="logout" size="sm" class="ml-3"
          >Logout</b-button
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "Login" });
      window.location.reload();
    },
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
  },
};
</script>

<style scoped>
.navbar {
  align-items: center;
  color: white;
  background-color: #78c2ad;
}
.navbar-left {
  display: flex !important;
  align-items: center;
}
.navbar-right {
  align-items: center;
}
.navbar b {
  color: white;
}
.navbar a {
  text-decoration: none;
}
.navbar a:first-child {
  margin-right: 15px;
}
.navbar h4 {
  margin-bottom: 0;
  font-weight: 550;
  margin-right: 2rem;
}
.navbar img {
  width: 35px;
  height: 35px;
  margin-right: 10px;
  object-fit: cover;
}
@media (max-width: 750px) {
  .navbar-right b {
    display: none;
  }
}
@media (max-width: 500px) {
  .navbar-left {
    display: none !important;
  }
}
</style>
