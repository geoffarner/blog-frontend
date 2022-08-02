<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Blgs</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="/posts">Posts</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" href="/posts/new">Post New</a>
          </li>

          <li class="nav-item">
            <a class="nav-link active" href="/signup">Sign Up</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/login">Login</a></li>
              <li><a class="dropdown-item" href="/signup">Sign Up</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="/logout">Logout</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <!-- old nav bar -->
  <!-- <nav>
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
  </nav> -->
  <router-view />
  <footer><h1>Amanda's Foot</h1></footer>
</template>

<style>
.body {
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  text-align: center;
  color: blue;
  background-image: url("./assets/pexels-photo-673648.jpeg");
}

/* .nav-toggler {
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  text-align: center;
  color: green;
} */
#app {
  font-family: Tahoma, Verdana, Segoe, sans-serif;
  text-align: center;
  color: blue;
}
</style>
