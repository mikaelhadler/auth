import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import { AuthGroupStore } from "@/store/views/auth-group";

declare module "@vue/runtime-core" {
  interface State {
    authGroup: AuthGroupStore;
  }

  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
