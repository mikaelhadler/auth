import { Session, SessionList } from '@auth/entity'
import { SessionFilters, SessionListRepository } from './protocols/session-repository'

export class DbSessionList implements SessionList {
  constructor (private readonly sessionRepository: SessionListRepository) {}

  async listActiveSessions (): Promise<Session[]> {
    const sessionFilters = <SessionFilters> {
      active: true
    }
    return this.sessionRepository.getSessionList(sessionFilters)
  }
}
