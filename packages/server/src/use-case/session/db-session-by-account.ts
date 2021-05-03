import { Session, SessionByAccount, uuid } from '@auth/entity'
import { AuthenticationByAccountRepository } from './protocols/authentication-by-account-repository'
import { SessionListByAuthenticationRepository } from './protocols/session-repository'

export class DbSessionByAccount implements SessionByAccount {
  constructor (
    private readonly authentication: AuthenticationByAccountRepository,
    private readonly session: SessionListByAuthenticationRepository
  ) {}

  async getByAccountId (accountId: uuid): Promise<Session[]> {
    const authentication = await this.authentication.getByAccountId(accountId)
    if (!authentication) throw new Error('account not found')
    const sessions = await this.session.getSessionsByAuthenticationId(authentication.id)
    return sessions
  }
}
