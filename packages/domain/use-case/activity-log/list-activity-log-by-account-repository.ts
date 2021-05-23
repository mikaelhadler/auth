import { ActivityLog, uuid } from "@auth/entity";

export interface ListActivityLogByAccountRepository {
  listByAccountId(accountId: uuid): Promise<ActivityLog[]>;
}
