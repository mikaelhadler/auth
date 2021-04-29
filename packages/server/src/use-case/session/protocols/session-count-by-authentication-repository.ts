import { uuid } from '@/entity/utils'

export interface SessionCountByAuthenticationRepository {
  count(authenticationId: uuid): Promise<number>
}
