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

    <b-form-group>
      <b-form-input
        v-model="form.retypePassword"
        placeholder="Enter password again"
        type="password"
        required
      ></b-form-input>
    </b-form-group>
    <b-button size="sm" type="submit" variant="success mb-3">Register</b-button>
  </b-form>
</template>

<script>
import { mapActions } from "vuex";
import { showToast } from "../util/toast";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        password: "",
        retypePassword: "",
      },
    };
  },
  methods: {
    ...mapActions(["register"]),
    async onSubmit() {
      if (this.form.password !== this.form.retypePassword)
        return showToast("Error", "Password is not match !", "danger");
      this.$store.commit("SET_LOADING", true);
      await this.register(this.form);
      this.$router.push({ name: "Dashboard" });
      this.$store.commit("SET_LOADING", false);
      this.form.username = "";
      this.form.password = "";
      this.form.retypePassword = "";
    },
  },
};
</script>

<style></style>
