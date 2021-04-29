import { Session } from '@/entity/session'
import { uuid } from '@/entity/utils'

export interface SessionByIdRepository {
  getById(sessionId: uuid): Promise<Session>
}
