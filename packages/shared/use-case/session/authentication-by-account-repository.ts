import { Authentication, uuid } from '@auth/entity'

export interface AuthenticationByAccountRepository {
  getByAccountId(accountId: uuid): Promise<Authentication>
}
