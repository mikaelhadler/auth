import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

import { AuthGroup } from "@auth/entity";

export interface AuthGroupStore {
  authGroupList: AuthGroup[];
}

export default {
  namespaced: true,
  state: {
    authGroupList: [],
  },
  mutations,
  actions,
  getters,
};
