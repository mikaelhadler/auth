import { Accounts, GetAccountById, uuid } from "@auth/entity"
import { GetAccountByIdRepository } from "@auth/use-case"

export class DbAccountById implements GetAccountById {
  constructor(private readonly accountRepo: GetAccountByIdRepository) {}

  async getById(accountId: uuid): Promise<Accounts> {
    const account = await this.accountRepo.getAccountById(accountId)
    return account
  }
}
