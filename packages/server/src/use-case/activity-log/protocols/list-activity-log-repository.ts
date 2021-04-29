import { ActivityLog } from '@/entity/activity-log'

export interface ListActivityLogRepository {
  listAll(): Promise<ActivityLog[]>
}
