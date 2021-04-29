import { ActivityLog } from '@/entity/activity-log'
import { uuid } from '@/entity/utils'

export interface GetActivityLogByIdRepository {
  getById(activityId: uuid): Promise<ActivityLog>
}
