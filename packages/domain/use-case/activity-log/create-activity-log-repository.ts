import { ActivityLog, ActivityLogProperties } from "@auth/entity";

export interface CreateActivityLogRepository {
  create(activity: ActivityLogProperties): Promise<ActivityLog>;
}
