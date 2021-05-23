import { SessionLimitCheckByAccount, uuid } from '@auth/entity'
import {
  AuthenticationByAccountRepository,
  SessionCountByAuthenticationRepository
} from '@auth/use-case'

export class DbSessionLimitCheckByAccount
implements SessionLimitCheckByAccount {
  constructor(
    private readonly authentication: AuthenticationByAccountRepository,
    private readonly sessionCount: SessionCountByAuthenticationRepository
  ) {}

  async check(accountId: uuid): Promise<boolean> {
    const authentication = await this.authentication.getByAccountId(accountId)
    if (!authentication) throw new Error('account not found')
    const activeSessionCount = await this.sessionCount.count(authentication.id)
    if (activeSessionCount > authentication.sessionLimit) {
      return true
    }
    return false
  }
}
