import { AccountModel, uuid } from "@auth/entity";
export interface AccountsByGroupRepository {
  getAccountByGroup(authGroupId: uuid): Promise<AccountModel[]>;
}
