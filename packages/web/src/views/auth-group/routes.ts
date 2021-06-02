import { RouteRecordRaw } from "vue-router";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/auth-groups",
    name: "AuthGroupList",
    component: () =>
      import(/* webpackChunkName: "auth-group" */ "./AuthGroupList.vue"),
  },
  {
    path: "/auth-groups/new",
    name: "AuthGroupNew",
    component: () =>
      import(/* webpackChunkName: "auth-group" */ "./AuthGroup.vue"),
  },
  {
    path: "/auth-groups/:id",
    name: "AuthGroupEdit",
    component: () =>
      import(/* webpackChunkName: "auth-group" */ "./AuthGroup.vue"),
  },
];
