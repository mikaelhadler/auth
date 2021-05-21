import { ActivityLog, ActivityLogProperties } from "@auth/domain";

export interface CreateActivityLogRepository {
  create(activity: ActivityLogProperties): Promise<ActivityLog>;
}
