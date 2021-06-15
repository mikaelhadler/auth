import actions from "./actions"
import mutations from "./mutations"
import getters from "./getters"

import { AuthGroup, AuthGroupModel } from "@auth/entity"

export interface AuthGroupStore {
  authGroupList: AuthGroup[]
  authGroup: AuthGroup
}

export default {
  namespaced: true,
  state: {
    authGroupList: [],
    authGroup: new AuthGroupModel()
  },
  mutations,
  actions,
  getters
}
