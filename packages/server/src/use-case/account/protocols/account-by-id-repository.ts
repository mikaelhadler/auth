import { uuid } from '@/entity/utils'
import { AccountModel } from '@/entity/account'

export interface GetAccountByIdRepository {
  getAccountById(accountId: uuid): Promise<AccountModel>
}
