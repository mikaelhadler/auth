import { AccountModel, UpdateAccountById, uuid } from '@auth/entity'
import { UpdateAccountByIdRepository } from '@auth/use-case'

export class DbUpdateAccountById implements UpdateAccountById {
  constructor(private readonly accountRepo: UpdateAccountByIdRepository) {}

  async update(
    accountId: uuid,
    data: Partial<AccountModel>
  ): Promise<AccountModel> {
    const updated = await this.accountRepo.update(accountId, data)
    return updated
  }
}
