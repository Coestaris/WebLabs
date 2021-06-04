<template>
  <main class="main mt-5">
    <div class="container">
      <div class="row center">
        <div class="col-sm-8 d-flex flex-column-reverse" id="postsBox">
          <post
            v-for="(post, i) in $store.state.model.posts"
            :key="post"
            v-bind:post="post"
            v-bind:i="i"
          />
          <router-link to="/addPost" class="btn btn-outline-info p-2 text-dark"
            >Create post</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import post from "../components/post.vue";
export default {
  name: "Home",
  components: {
    post,
  },
  created() {
    this.$store.commit("LOAD_FROM_SERVER");
  },
};
</script>

<style scoped>
.btn {
  background-color: white;
  margin-bottom: 10px;
}
.btn:hover {
  background-color: #17a2b8;
}
</style>
