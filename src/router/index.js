import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestView.vue";
import SignupView from "../views/SignupView.vue";
import PostsIndex from "../views/PostsIndex.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import PostsNew from "../views/PostsNew.vue";
import PostsShow from "../views/PostsShow.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/posts", name: "posts", component: PostsIndex },
  { path: "/signup", name: "signup", component: SignupView },
  { path: "/test", name: "test", component: TestView },
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
  { path: "/posts/new", name: "posts/new", component: PostsNew },
  { path: "/posts/:id", name: "posts-show", component: PostsShow },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
