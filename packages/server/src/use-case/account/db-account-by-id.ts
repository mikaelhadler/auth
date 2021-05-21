import { AccountModel, GetAccountById, uuid } from "@auth/domain";
import { GetAccountByIdRepository } from "./protocols/account-by-id-repository";

export class DbAccountById implements GetAccountById {
  constructor(private readonly accountRepo: GetAccountByIdRepository) {}

  async getById(accountId: uuid): Promise<AccountModel> {
    const account = await this.accountRepo.getAccountById(accountId);
    return account;
  }
}
