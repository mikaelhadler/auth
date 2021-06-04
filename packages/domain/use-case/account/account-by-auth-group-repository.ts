import { Accounts, uuid } from "@auth/entity"
export interface AccountsByGroupRepository {
  getAccountByGroup(authGroupId: uuid): Promise<Accounts[]>
}
