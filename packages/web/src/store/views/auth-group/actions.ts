import { ActionTree } from "vuex"
import { AuthGroupStore } from "."
import { AuthGroupService } from "@/services"

const service = new AuthGroupService()

export default <ActionTree<AuthGroupStore, AuthGroupStore>>{
  async listAuthGroup(context) {
    const list = await service.list()
    context.commit("setAuthGroupList", list)
  },
  async removeAuthGroup(context, authGroupId) {
    const authGroup = await service.remove(authGroupId)
    context.commit("setAuthGroup", authGroup)
    context.dispatch("listAuthGroup")
  }
}
