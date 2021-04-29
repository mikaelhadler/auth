import { AccountModel } from '@/entity/account'

export interface CancelAccountByIdRepository {
  cancel(accountId): Promise<AccountModel>
}
