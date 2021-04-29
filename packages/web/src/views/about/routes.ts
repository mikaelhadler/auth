import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "./About.vue"),
  },
];
