import { RouteRecordRaw } from "vue-router";
import SignIn from "./SignIn.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
];
