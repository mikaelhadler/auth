import { AccountModel, ListAllAccount } from "@auth/domain";
import { ListAllAccountRepository } from "./protocols/list-all-account";

export class DbListAllAccount implements ListAllAccount {
  constructor(private readonly accountRepo: ListAllAccountRepository) {}

  async listAll(): Promise<AccountModel[]> {
    const response = await this.accountRepo.listAll();
    return response;
  }
}
