import { AuthGroup, uuid } from "@auth/domain";

export interface GetAuthGroupRepository {
  get(authGroupId: uuid): Promise<AuthGroup>;
}
