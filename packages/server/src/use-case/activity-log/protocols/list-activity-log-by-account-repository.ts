import { ActivityLog } from '@/entity/activity-log'
import { uuid } from '@/entity/utils'

export interface ListActivityLogByAccountRepository {
  listByAccountId(accountId: uuid): Promise<ActivityLog[]>
}
