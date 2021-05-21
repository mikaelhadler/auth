import { AccountModel, UpdateAccountById, uuid } from "@auth/domain";
import { UpdateAccountByIdRepository } from "./protocols/update-account-by-id-repository";

export class DbUpdateAccountById implements UpdateAccountById {
  constructor(private readonly accountRepo: UpdateAccountByIdRepository) {}

  async update(
    accountId: uuid,
    data: Partial<AccountModel>
  ): Promise<AccountModel> {
    const updated = await this.accountRepo.update(accountId, data);
    return updated;
  }
}
