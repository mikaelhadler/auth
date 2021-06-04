import { Accounts, AccountsUpdates, uuid } from "@auth/entity"

export interface UpdateAccountByIdRepository {
  update(accountId: uuid, data: AccountsUpdates): Promise<Accounts>
}
