<template>
  <b-col sm="12" md="6" lg="4" class="mb-3">
    <b-card
      class="shadow card-item"
      :border-variant="
        post.status === 'LEARNED'
          ? 'success'
          : post.status === 'LEARNING'
          ? 'warning'
          : 'danger'
      "
    >
      <b-row>
        <b-col
          ><p class="title ml-2">
            <b> {{ post.title }} </b>
          </p>
          <b-badge
            class="b-badge"
            pill
            :variant="
              post.status === 'LEARNED'
                ? 'success'
                : post.status === 'LEARNING'
                ? 'warning'
                : 'danger'
            "
            >{{ post.status }}</b-badge
          >
        </b-col>
        <b-col>
          <ButtonAction :post="post" />
        </b-col>
      </b-row>
      <b-row>
        <p class="text-muted">{{ post.description }}</p>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
import ButtonAction from "../components/ButtonAction.vue";
export default {
  name: "Card",
  components: { ButtonAction },
  props: {
    post: { type: Object },
  },
};
</script>

<style scoped>
.card-item {
  border: 2px solid rgba(0, 0, 0, 0.125);
}

.card-item p {
  margin-bottom: 0;
  margin-top: 1rem;
}
.card-body {
  padding: 10px;
}
.card-body .col {
  padding: 0;
}
.card-body .col :last-child {
  display: flex;
  align-items: center;
}
.title {
  margin: 0 !important;
  padding-left: 5px;
  margin-bottom: 5px !important;
}
.b-badge {
  width: max-content;
  font-size: 1rem;
}
</style>
