import { ActivityLog } from "@auth/domain";

export interface ListActivityLogRepository {
  listAll(): Promise<ActivityLog[]>;
}
