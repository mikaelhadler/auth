import { AuthenticationStatusEnum } from '@/entity/authentication'
import { SessionDrop } from '@/entity/session'
import { uuid } from '@/entity/utils'
import { AuthenticationByAccountRepository } from './protocols/authentication-by-account-repository'
import { AuthenticationUpdateStatusRepository } from './protocols/authentication-update-status-repository'
import { SessionCountByAuthenticationRepository } from './protocols/session-count-by-authentication-repository'
import { SessionDropRepository } from './protocols/session-drop'

const JUST_ONE_SESSION = 1
export class DbSessionDrop implements SessionDrop {
  constructor (
    private readonly authentication: AuthenticationByAccountRepository,
    private readonly sessionCount: SessionCountByAuthenticationRepository,
    private readonly authenticationUpdateStatus: AuthenticationUpdateStatusRepository,
    private readonly session: SessionDropRepository
  ) {}

  async drop (sessionId: uuid, accountId: uuid): Promise<void> {
    const authentication = await this.authentication.getByAccountId(accountId)
    if (!authentication) throw new Error('account not found')
    const sessionCount = await this.sessionCount.count(authentication.id)
    if (sessionCount === JUST_ONE_SESSION) {
      await this.authenticationUpdateStatus.updateStatus(authentication.id, AuthenticationStatusEnum.Offline)
    }
    await this.session.drop(sessionId)
    return null
  }
}
