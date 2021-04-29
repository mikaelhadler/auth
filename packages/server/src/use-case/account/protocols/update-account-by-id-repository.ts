import { AccountModel, AccountModelUpdates } from '@/entity/account'
import { uuid } from '@/entity/utils'

export interface UpdateAccountByIdRepository {
  update(accountId: uuid, data: AccountModelUpdates): Promise<AccountModel>
}
