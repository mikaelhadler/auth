import { AccountModel, ListAccountByAuthGroup, uuid } from "@auth/entity";
import { AccountsByGroupRepository } from "@auth/use-case";

export class DbListAccountByAuthGroup implements ListAccountByAuthGroup {
  constructor(private readonly accountRepo: AccountsByGroupRepository) {}

  async listAccountByAuthGroupId(authGroupId: uuid): Promise<AccountModel[]> {
    const list = await this.accountRepo.getAccountByGroup(authGroupId);
    return list;
  }
}
