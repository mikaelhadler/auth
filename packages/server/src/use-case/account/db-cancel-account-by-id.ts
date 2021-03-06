import { AccountModel, CancelAccountById, uuid } from "@auth/entity";
import { CancelAccountByIdRepository } from "@auth/use-case";

export class DbCancelAccountById implements CancelAccountById {
  constructor(private readonly accountRepo: CancelAccountByIdRepository) {}

  async cancel(accountId: uuid): Promise<AccountModel> {
    const account = await this.accountRepo.cancel(accountId);
    return account;
  }
}
