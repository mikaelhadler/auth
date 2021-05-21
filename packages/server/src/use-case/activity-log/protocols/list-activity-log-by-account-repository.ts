import { ActivityLog, uuid } from "@auth/domain";

export interface ListActivityLogByAccountRepository {
  listByAccountId(accountId: uuid): Promise<ActivityLog[]>;
}
