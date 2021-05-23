import { AccountModel, AccountModelUpdates, uuid } from "@auth/entity";

export interface UpdateAccountByIdRepository {
  update(accountId: uuid, data: AccountModelUpdates): Promise<AccountModel>;
}
