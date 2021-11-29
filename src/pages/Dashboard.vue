<template>
  <div class="dashboard">
    <b-card
      border-variant="success"
      header="Welcome to learn it"
      class="cards"
      align="center"
      v-if="posts.length === 0"
    >
      <p class="text-primary title">
        <b>Welcome to nguyen {{ user.username }} developer</b>
      </p>
      <p class="text-danger">
        Click the button at right buttom to track your skill to learn
      </p>
      <p class="text-danger">
        NOTE VN : Bấm vào nút phía dưới bên phải để thêm skill mới để học @@@
      </p>
    </b-card>

    <b-row class="contain-card">
      <Card v-for="post in posts" :post="post" :key="post._id" />
    </b-row>
    <ModalCreate />
    <ModalUpdate v-if="show" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import ModalCreate from "../components/ModalCreate.vue";
import ModalUpdate from "../components/ModalUpdate.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Dashboard",
  components: { Card, ModalCreate, ModalUpdate },
  computed: {
    ...mapGetters(["posts"]),
    user() {
      return this.$store.state.auth.user;
    },
    show() {
      return this.$store.state.modalUpdate.show;
    },
  },
  methods: {
    ...mapActions(["getPosts"]),
  },
  mounted() {
    this.getPosts();
  },
};
</script>

<style>
.dashboard {
  padding: 20px;
}
div.card-header {
  font-size: 2rem;
  font-weight: bold;
}
.dashboard .title {
  font-size: 1.4rem !important;
}
.dashboard .cards p {
  font-size: 1.1rem;
}
.dashboard .contain-card {
  margin: 0 -15px;
}
</style>
