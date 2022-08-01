<script>
import axios from "axios";

export default {
  data: function () {
    return {
      posts: {},
    };
  },
  created: function () {
    axios.get("/posts/1.json").then((response) => {
      this.post = response.data;
    });
  },
};
</script>
<template>
  <div class="posts-show">
    <div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <router-link to="/posts">Back to all Posts</router-link>
    </div>
  </div>
</template>
