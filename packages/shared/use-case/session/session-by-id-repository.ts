import { Session, uuid } from '@auth/entity'

export interface SessionByIdRepository {
  getById(sessionId: uuid): Promise<Session>
}
