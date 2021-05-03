import { ActivityLog, uuid } from '@auth/entity'

export interface GetActivityLogByIdRepository {
  getById(activityId: uuid): Promise<ActivityLog>
}
