import { AuthGroup, AuthGroupProperties } from '@/entity/auth-group'

export interface CreateAuthGroupRepository {
  create(authGroup: AuthGroupProperties): Promise<AuthGroup>
}
