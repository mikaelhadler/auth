import { Session } from '@/entity/session'
import { uuid } from '@/entity/utils'

export type SessionFilters = Partial<Session>
export interface SessionListRepository {
  getSessionList(options?: SessionFilters): Promise<Session[]>
}

export interface SessionListByAuthenticationRepository {
  getSessionsByAuthenticationId(authenticationId: uuid):Promise<Session[]>
}
