import { AuthGroup, AuthGroupProperties } from "@auth/domain";

export interface CreateAuthGroupRepository {
  create(authGroup: AuthGroupProperties): Promise<AuthGroup>;
}
