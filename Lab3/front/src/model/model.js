export default class Model {
  constructor() {
    this.posts = [];
  }

  getPosts() {
    return this.posts;
  }

  getPost(id) {
    return this.posts[this.posts.findIndex((item) => +item.id === +id)];
  }

  removePost(id) {
    const postIdx = this.posts.findIndex((item) => +item.id === +id);

    this.posts.splice(postIdx, 1);
    this.sendPostsOnServer(this.posts);
  }

  createPost(info) {
    const newPost = {
      id: Math.round(Math.random() * 100000).toString(),
      comments: [],
      ...info,
    };
    this.posts.push(newPost);
    this.sendPostsOnServer(this.posts);
  }

  createComment(info) {
    let newComment = { author: info.author, text: info.text };
    this.posts[info.id].comments.push(newComment);
    console.log(this.posts);
  }
  async getPostsFromServer() {
    this.posts = [];
    await fetch("http://localhost:3000/")
      .then((res) => res.json())
      .then((res) => {
        res.items.forEach((item) => {
          const post = {
            id: item.id,
            comments: [],
            title: item.title,
            text: item.text,
            author: item.author,
          };
          this.posts.push(post);
        });
      });
  }
  async sendPostsOnServer() {
    await fetch("http://localhost:3000/set", {
      method: "POST",
      body: JSON.stringify({ posts: this.posts }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
