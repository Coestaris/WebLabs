<template>
  <main class="main mt-5">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="card card-margin" id="contentBox">
            <div class="card-body">
              <h1 class="card-title">
                {{ $store.state.model.posts[id].title }}
              </h1>
              <h6 class="card-title mb-3">
                {{ $store.state.model.posts[id].author }}
              </h6>
              <p class="card-text fs-4">
                {{ $store.state.model.posts[id].text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card card-margin">
            <div class="card-body">
              <p class="card-text fs-4">Comments:</p>
              <div class="d-flex flex-column-reverse" id="commentBox">
                <div
                  v-for="comment in $store.state.model.posts[id].comments"
                  :key="comment"
                  class="comment mb-2"
                >
                  <div class="row border border-secondary border-2 rounded">
                    <h5 class="card-title">{{ comment.author }}</h5>
                    <hr />
                    <p class="card-text">{{ comment.text }}</p>
                  </div>
                </div>
              </div>
              <div class="mt-3">
                <textarea
                  v-model="newComment"
                  class="col-12"
                  name="commentText"
                  rows="4"
                ></textarea>
                <button
                  @click="addComment()"
                  type="submit"
                  class="btn btn-dark"
                >
                  Comment
                </button>
              </div>
              <router-link to="/" type="submit" class="btn btn-dark mt-3">
                Back to posts
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      newComment: "",
    };
  },
  created() {
    console.log(this.id);
    console.log(this.$store.state.model.posts[this.id].comments);
  },
  methods: {
    addComment() {
      if (this.newComment.trim().length) {
        const currentUser = JSON.parse(localStorage.getItem("sessionUser"))
          .nickname;
        const info = {
          id: this.id,
          author: currentUser,
          text: this.newComment,
        };
        this.$store.dispatch("CREATE_COMMENT", info);
      } else {
        alert("Empty comment!");
      }
    },
  },
};
</script>