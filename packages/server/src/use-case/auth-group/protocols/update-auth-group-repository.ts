import { AuthGroup, AuthGroupUpdates } from '@/entity/auth-group'
import { uuid } from '@/entity/utils'

export interface UpdateAuthGroupRepository {
  update (authGroupId: uuid, authGroup: AuthGroupUpdates): Promise<AuthGroup>
}
