import { AccountModel, ListAccountByAuthGroup, uuid } from "@auth/domain";
import { AccountsByGroupRepository } from "./protocols/account-by-auth-group-repository";

export class DbListAccountByAuthGroup implements ListAccountByAuthGroup {
  constructor(private readonly accountRepo: AccountsByGroupRepository) {}

  async listAccountByAuthGroupId(authGroupId: uuid): Promise<AccountModel[]> {
    const list = await this.accountRepo.getAccountByGroup(authGroupId);
    return list;
  }
}
