import { MutationTree } from "vuex";
import { AuthGroupStore } from ".";

export default <MutationTree<AuthGroupStore>>{
  setAuthGroupList(state, list) {
    state.authGroupList = list;
  },
};
