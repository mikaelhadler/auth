import {
  ListAuthGroupRepository,
  RemoveAuthGroupRepository
} from "@auth/use-case"
import { AuthGroup, uuid } from "@auth/entity"
import { client } from "@/config/http"
export class AuthGroupService
  implements ListAuthGroupRepository, RemoveAuthGroupRepository
{
  async list(): Promise<AuthGroup[]> {
    const list = await client.get<AuthGroup[]>("/auth-groups")
    return list.data
  }

  async remove(authGroupId: uuid): Promise<AuthGroup> {
    const authGroup = await client.delete<AuthGroup>(
      `/auth-groups/${authGroupId}`
    )
    return authGroup.data
  }
}
