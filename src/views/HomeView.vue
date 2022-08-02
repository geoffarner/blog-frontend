<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Almost Functioning Blog Page",
      posts: [],
      newPostParams: {},
      currentPost: {},
      editPostParams: {},
    };
  },
  created: function () {
    this.indexPosts();
  },
  methods: {
    indexPosts: function () {
      axios.get("/posts.json").then((response) => {
        this.posts = response.data;
        console.log("All Posts:", this.posts);
      });
    },
    createPost: function () {
      axios
        .post("/posts.json", this.newPostParams)
        .then((response) => {
          console.log("Success!", response.data);
          this.posts.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
    showPost: function (post) {
      console.log(post);
      this.currentPost = post;
      this.editPostParams = post;
      document.querySelector("#post-details").showModal();
    },
    updatePost: function (post) {
      axios.patch("/posts/" + post.id + ".json", this.editPostParams).then((response) => {
        console.log("Success!", response.data);
      });
    },
    destroyPost: function (post) {
      axios.delete("/posts/" + post.id).then((response) => {
        console.log("Success!", response.data);
        var index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <h2>New Post</h2>
    <div>
      Title:
      <input type="text" v-model="newPostParams.title" />
      Body:
      <input type="text" v-model="newPostParams.body" />
      Image:
      <input type="text" v-model="newPostParams.image" />
    </div>
    <button v-on:click="createPost()">Create</button>
    <h2>All Posts</h2>
    <div v-for="post in posts" v-bind:key="post.id">
      <img :src="post.image_url" alt="interesting post" />
    </div>
    <dialog id="post-details">
      <form method="dialog">
        <h1>Blog Info</h1>
        <p>
          Title:
          <input type="text" v-model="editPostParams.title" />
          Body:
          <input type="text" v-model="editPostParams.body" />
          Image:
          <input type="text" v-model="editPostParams.image" />
        </p>
        <button v-on:click="updatePost(editPostParams)">Update</button>
        <button v-on:click="destroyPost(currentPost)">Destroy</button>
        <button>Close</button>
      </form>
    </dialog>
  </div>
</template>

<style></style>
