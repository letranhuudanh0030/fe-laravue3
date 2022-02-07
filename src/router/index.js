import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About/Index.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/Contact/Index.vue"),
  },
  {
    path: "/articles",
    name: "articles.index",
    component: () =>
      import(/* webpackChunkName: "articles" */ "../views/Articles/Index.vue"),
  },
  {
    path: "/articles/:slug",
    name: "articles.show",
    component: () =>
      import(
        /* webpackChunkName: "articles-detail" */ "../views/Articles/Show.vue"
      ),
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
