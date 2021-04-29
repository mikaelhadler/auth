import { SessionById, SessionCheckValidation } from '@/entity/session'
import { uuid } from '@/entity/utils'
import { SessionDropRepository } from './protocols/session-drop'

export class DbSessionCheckValidation implements SessionCheckValidation {
  constructor (
    private readonly sessionById: SessionById,
    private readonly sessionDrop: SessionDropRepository
  ) {}

  async check (sessionId: uuid, userAgent: string): Promise<boolean> {
    const session = await this.sessionById.getById(sessionId)
    const currentDate = new Date()
    const conditions = {
      hasNoSession: !session,
      inactiveSession: !session?.active,
      expiredSession: session?.dueDate <= currentDate,
      differentOrigin: session?.userAgent !== userAgent
    }
    const isInvalid = Object.values(conditions).some(condition => condition)

    if (isInvalid && session?.active) {
      await this.sessionDrop.drop(session.id)
    }
    return isInvalid
  }
}
