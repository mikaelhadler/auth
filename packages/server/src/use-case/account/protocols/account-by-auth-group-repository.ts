import { uuid } from '@/entity/utils'
import { AccountModel } from '@/entity/account'

export interface AccountsByGroupRepository {
  getAccountByGroup(authGroupId: uuid): Promise<AccountModel[]>
}
