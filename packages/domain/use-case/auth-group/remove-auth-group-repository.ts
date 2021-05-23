import { AuthGroup, uuid } from "@auth/entity";

export interface RemoveAuthGroupRepository {
  remove(authGroupId: uuid): Promise<AuthGroup>;
}
