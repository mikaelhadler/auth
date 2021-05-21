import { AuthGroup, uuid } from "@auth/domain";

export interface RemoveAuthGroupRepository {
  remove(authGroupId: uuid): Promise<AuthGroup>;
}
