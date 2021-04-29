import { RouteRecordRaw } from "vue-router";
import Home from "./Home.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];
