import { AuthGroup, AuthGroupUpdates, uuid } from "@auth/domain";

export interface UpdateAuthGroupRepository {
  update(authGroupId: uuid, authGroup: AuthGroupUpdates): Promise<AuthGroup>;
}
