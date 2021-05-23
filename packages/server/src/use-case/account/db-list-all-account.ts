import { AccountModel, ListAllAccount } from "@auth/entity";
import { ListAllAccountRepository } from "@auth/use-case";

export class DbListAllAccount implements ListAllAccount {
  constructor(private readonly accountRepo: ListAllAccountRepository) {}

  async listAll(): Promise<AccountModel[]> {
    const response = await this.accountRepo.listAll();
    return response;
  }
}
