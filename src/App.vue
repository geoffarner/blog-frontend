<template>
  <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/posts">Posts</router-link>
    |
    <router-link to="/posts/new">Post New</router-link>
    |
    <router-link to="/signup">Sign up</router-link>
    |
    <a href="/login">Login</a>
    |
    <a href="/logout">Logout</a>
  </nav>
  <router-view />
  <footer><h1>Amanda's Foot</h1></footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
