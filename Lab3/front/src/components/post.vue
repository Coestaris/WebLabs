<template>
  <div class="card card-margin">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.text }}</p>
      <div class="d-flex justify-content-between">
        <div class="mr-auto p-2">
          <router-link
            :to="{ name: 'postPage', params: { id: i } }"
            class="btn btn-dark getPost"
            data-id="${this.id}"
          >
            Read
          </router-link>
        </div>
        <div @click="deletePost()" class="p-2">
          <button class="btn btn-dark delete" data-id="${this.id}">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
    },
    i: {
      type: Number,
    },
  },
  methods: {
    deletePost() {
      this.$store.dispatch("REMOVE_POST", this.i);
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 10px;
}
</style>