import { AuthGroup, uuid } from "@auth/entity";

export interface GetAuthGroupRepository {
  get(authGroupId: uuid): Promise<AuthGroup>;
}
