import { ActivityLog, ListActivityLogByAccount, uuid } from '@auth/entity'
import { ListActivityLogByAccountRepository } from './protocols/list-activity-log-by-account-repository'

export class DbListActivityLogByAccount implements ListActivityLogByAccount {
  constructor (private readonly activityLogRepo: ListActivityLogByAccountRepository) {}

  async listByAccountId (accountId: uuid): Promise<ActivityLog[]> {
    const activityLogList = await this.activityLogRepo.listByAccountId(accountId)
    return activityLogList
  }
}
