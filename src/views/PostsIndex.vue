<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Welcome to a Blog Post",
      posts: [],
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
  },
};
</script>

<template>
  <div
    v-for="post in posts"
    v-bind:key="post.id"
    v-on:click="currentPost = post"
    v-bind:class="{ selected: post === currentPost }"
  >
    <h1>{{ post.title }}</h1>
    <img :src="post.image" alt="Interesting Blog" />
    <p>
      {{ post.body }}
    </p>
    <p>{{ post.image }}</p>
  </div>
</template>

<style></style>
