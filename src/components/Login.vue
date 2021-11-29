<template>
  <b-form @submit.prevent="onSubmit">
    <b-form-group>
      <b-form-input
        v-model="form.username"
        type="text"
        placeholder="Enter username"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group>
      <b-form-input
        v-model="form.password"
        placeholder="Enter password"
        type="password"
        required
      ></b-form-input>
    </b-form-group>
    <b-button size="sm" type="submit" variant="success mb-3">Login</b-button>
  </b-form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
    async onSubmit() {
      this.$store.commit("SET_LOADING", true);
      await this.login(this.form);
      this.$router.push({ name: "Dashboard" });
      this.$store.commit("SET_LOADING", false);
      this.form.username = "";
      this.form.password = "";
    },
  },
};
</script>

<style></style>
