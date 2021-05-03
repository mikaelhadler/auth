import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/auth-group",
    name: "AuthGroup",
    component: () =>
      import(/* webpackChunkName: "auth-group" */ "./AuthGroupList.vue"),
  },
];
