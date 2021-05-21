import { AccountModel, uuid } from "@auth/domain";
export interface AccountsByGroupRepository {
  getAccountByGroup(authGroupId: uuid): Promise<AccountModel[]>;
}
