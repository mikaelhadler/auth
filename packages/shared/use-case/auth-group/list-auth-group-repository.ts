import { AuthGroup } from '@auth/entity'

export interface ListAuthGroupRepository {
  list(): Promise<AuthGroup[]>
}
