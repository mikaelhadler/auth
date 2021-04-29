import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { routes as home } from "../views/home/routes";
import { routes as about } from "../views/about/routes";
import { routes as signIn } from "../views/sign-in/routes";
import { routes as authGroup } from "../views/auth-group/routes";

const routes: Array<RouteRecordRaw> = [
  ...home,
  ...about,
  ...signIn,
  ...authGroup,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
