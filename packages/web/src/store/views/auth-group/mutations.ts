import { MutationTree } from "vuex"
import { AuthGroupStore } from "."
import { AuthGroupModel } from "../../../../../domain/entity"

export default <MutationTree<AuthGroupStore>>{
  setAuthGroupList(state, list) {
    state.authGroupList = list
  },
  setAuthGroup(state, authGroup) {
    state.authGroup = new AuthGroupModel(authGroup)
  }
}
