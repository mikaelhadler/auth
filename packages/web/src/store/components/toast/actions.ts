import { ActionTree } from "vuex";
import { AuthGroupStore } from ".";
import service from "../services/auth-group-service";

export default <ActionTree<AuthGroupStore, AuthGroupStore>>{
  async listAuthGroup(context) {
    const list = await service.authGroupList();
    context.commit("setAuthGroupList", list);
  },
};
