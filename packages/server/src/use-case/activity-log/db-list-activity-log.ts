import { ActivityLog, ListActivityLog } from '@/entity/activity-log'
import { ListActivityLogRepository } from './protocols/list-activity-log-repository'

export class DbListActivityLog implements ListActivityLog {
  constructor (private readonly activityLogRepo: ListActivityLogRepository) {}

  async listAll (): Promise<ActivityLog[]> {
    const activityLogList = await this.activityLogRepo.listAll()
    return activityLogList
  }
}
