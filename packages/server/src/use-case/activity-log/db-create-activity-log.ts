import { ActivityLog, ActivityLogProperties, CreateActivityLog } from '@auth/entity'
import { CreateActivityLogRepository } from './protocols/create-activity-log-repository'

export class DbCreateActivityLog implements CreateActivityLog {
  constructor (private readonly activityLog: CreateActivityLogRepository) {}

  async logActivity (activity: ActivityLogProperties): Promise<ActivityLog> {
    const activityResponse = await this.activityLog.create(activity)
    return activityResponse
  }
}
