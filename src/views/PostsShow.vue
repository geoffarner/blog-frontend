<script>
import axios from "axios";

export default {
  data: function () {
    return {
      post: {},
    };
  },
  created: function () {
    axios.get("/posts/" + this.$route.params.id + ".json").then((response) => {
      this.post = response.data;
    });
  },
  methods: {},
};
</script>

<template>
  <div class="posts-show">
    <div class="container">
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <p>{{ post.image }}</p>
      <router-link to="/posts">Back to all Posts</router-link>
      |
      <router-link v-bind:to="`/posts/${post.id}/edit`">Edit this Posts</router-link>
    </div>
  </div>
</template>
