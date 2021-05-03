import { AuthGroup, AuthGroupUpdates, uuid } from '@auth/entity'

export interface UpdateAuthGroupRepository {
  update (authGroupId: uuid, authGroup: AuthGroupUpdates): Promise<AuthGroup>
}
