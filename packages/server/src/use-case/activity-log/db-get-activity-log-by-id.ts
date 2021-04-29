import { ActivityLog, ActivityLogById } from '@/entity/activity-log'
import { uuid } from '@/entity/utils'
import { GetActivityLogByIdRepository } from './protocols/get-activity-log-by-id-repository'

export class DbGetActivityLogById implements ActivityLogById {
  constructor (private readonly activityLogRepo: GetActivityLogByIdRepository) {}

  async getById (activityId: uuid): Promise<ActivityLog> {
    const activityLog = await this.activityLogRepo.getById(activityId)
    return activityLog
  }
}
