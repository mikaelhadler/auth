import { createStore } from "vuex";

import authGroup from "@/store/views/auth-group";

export default createStore({
  modules: {
    authGroup,
  },
});
