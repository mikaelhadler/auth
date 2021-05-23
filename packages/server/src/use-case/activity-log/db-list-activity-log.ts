import { ActivityLog, ListActivityLog } from "@auth/entity";
import { ListActivityLogRepository } from "@auth/use-case";

export class DbListActivityLog implements ListActivityLog {
  constructor(private readonly activityLogRepo: ListActivityLogRepository) {}

  async listAll(): Promise<ActivityLog[]> {
    const activityLogList = await this.activityLogRepo.listAll();
    return activityLogList;
  }
}
