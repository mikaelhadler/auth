import { ActionTree } from "vuex";
import { AuthGroupStore } from ".";
import { AuthGroupService } from "@/services";

const authGroup = new AuthGroupService();

export default <ActionTree<AuthGroupStore, AuthGroupStore>>{
  async listAuthGroup(context) {
    const list = await authGroup.list();
    context.commit("setAuthGroupList", list);
  },
};
