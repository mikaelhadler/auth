import { Authentication } from '@/entity/authentication'
import { uuid } from '@/entity/utils'

export interface AuthenticationByAccountRepository {
  getByAccountId(accountId: uuid): Promise<Authentication>
}
