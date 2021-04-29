import { AccountModel } from '@/entity/account'

export interface ListAllAccountRepository {
  listAll(): Promise<AccountModel[]>
}
