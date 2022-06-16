import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView"),
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("@/views/todo/TodoView"),
    },
    {
      path: "/flip",
      name: "flip",
      component: () => import("@/views/flip/FlipView"),
    },
  ],
});

export default router;
