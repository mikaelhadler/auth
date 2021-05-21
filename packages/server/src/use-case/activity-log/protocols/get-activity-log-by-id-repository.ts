import { ActivityLog, uuid } from "@auth/domain";

export interface GetActivityLogByIdRepository {
  getById(activityId: uuid): Promise<ActivityLog>;
}
