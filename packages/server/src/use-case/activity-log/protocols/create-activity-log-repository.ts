import { ActivityLog, ActivityLogProperties } from '@/entity/activity-log'

export interface CreateActivityLogRepository {
  create(activity: ActivityLogProperties): Promise<ActivityLog>
}
