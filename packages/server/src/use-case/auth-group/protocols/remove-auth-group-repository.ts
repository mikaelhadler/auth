import { AuthGroup } from '@/entity/auth-group'
import { uuid } from '@/entity/utils'

export interface RemoveAuthGroupRepository {
  remove(authGroupId: uuid): Promise<AuthGroup>
}
