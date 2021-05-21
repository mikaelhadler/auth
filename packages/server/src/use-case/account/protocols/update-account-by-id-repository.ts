import { AccountModel, AccountModelUpdates, uuid } from "@auth/domain";

export interface UpdateAccountByIdRepository {
  update(accountId: uuid, data: AccountModelUpdates): Promise<AccountModel>;
}
