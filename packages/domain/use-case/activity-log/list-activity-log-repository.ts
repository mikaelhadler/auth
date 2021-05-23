import { ActivityLog } from "@auth/entity";

export interface ListActivityLogRepository {
  listAll(): Promise<ActivityLog[]>;
}
