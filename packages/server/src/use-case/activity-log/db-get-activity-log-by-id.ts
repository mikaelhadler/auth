import { ActivityLog, ActivityLogById, uuid } from '@auth/entity'
import { GetActivityLogByIdRepository } from './protocols/get-activity-log-by-id-repository'

export class DbGetActivityLogById implements ActivityLogById {
  constructor (private readonly activityLogRepo: GetActivityLogByIdRepository) {}

  async getById (activityId: uuid): Promise<ActivityLog> {
    const activityLog = await this.activityLogRepo.getById(activityId)
    return activityLog
  }
}
