import { AuthGroup } from '@/entity/auth-group'

export interface ListAuthGroupRepository {
  list(): Promise<AuthGroup[]>
}
