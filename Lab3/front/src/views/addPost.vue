<template>
  <main class="main mt-5">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-8">
          <div class="card card-margin">
            <h2 class="p-3">Create post</h2>
            <div class="card-body">
              <form>
                <label class="form-label">Post title</label>
                <div class="mb-3">
                  <input
                    v-model="title"
                    type="text"
                    class="col-6"
                    name="postTitle"
                  />
                </div>
                <label class="form-label">Post body</label>
                <textarea
                  v-model="text"
                  class="col-12"
                  name="postBody"
                  rows="12"
                ></textarea>
                <router-link
                  to="/"
                  @click="createPost()"
                  type="submit"
                  class="btn btn-dark mt-2"
                >
                  Create
                </router-link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      text: "",
      author: "",
    };
  },
  created() {
    this.author = JSON.parse(localStorage.getItem("sessionUser")).nickname;
  },
  methods: {
    createPost() {
      if (this.title.trim().length && this.text.trim().length) {
        const info = {
          title: this.title,
          text: this.text,
          author: this.author,
        };
        this.$store.dispatch("CREATE_POST", info);
      } else {
        alert("Empty input!");
      }
    },
  },
};
</script>