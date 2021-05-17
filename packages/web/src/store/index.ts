import { createStore } from "vuex";

import authGroup from "@/views/auth-group/store";

export default createStore({
  modules: {
    authGroup,
  },
});
