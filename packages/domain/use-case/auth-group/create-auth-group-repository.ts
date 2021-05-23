import { AuthGroup, AuthGroupProperties } from "@auth/entity";

export interface CreateAuthGroupRepository {
  create(authGroup: AuthGroupProperties): Promise<AuthGroup>;
}
