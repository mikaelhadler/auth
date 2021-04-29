import { AuthGroup } from '@/entity/auth-group'
import { uuid } from '@/entity/utils'

export interface GetAuthGroupRepository {
  get(authGroupId: uuid): Promise<AuthGroup>
}
