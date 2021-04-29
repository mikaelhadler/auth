import { uuid } from '@/entity/utils'

export interface SessionDropRepository {
  drop(sessionId: uuid): Promise<void>
}
