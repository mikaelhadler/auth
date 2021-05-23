import { AccountModel } from '@auth/entity'

export interface CancelAccountByIdRepository {
  cancel(accountId): Promise<AccountModel>
}
