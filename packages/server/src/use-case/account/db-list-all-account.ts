import { Accounts, ListAllAccount } from "@auth/entity"
import { ListAllAccountRepository } from "@auth/use-case"

export class DbListAllAccount implements ListAllAccount {
  constructor(private readonly accountRepo: ListAllAccountRepository) {}

  async listAll(): Promise<Accounts[]> {
    const response = await this.accountRepo.listAll()
    return response
  }
}
