import { Authentication, AuthenticationStatusEnum, uuid } from '@auth/entity'
import {
  AuthenticationByAccountRepository,
  AuthenticationUpdateStatusRepository
} from '@auth/use-case'

import { mockAuthentication } from '@/__tests__/entity/mock/authentications'

export const mockedAuthentication = mockAuthentication()
export function makeAuthenticationByAccountStub(): AuthenticationByAccountRepository {
  class AuthenticationByAccountStub
  implements AuthenticationByAccountRepository {
    async getByAccountId(accountId: uuid): Promise<Authentication> {
      return mockedAuthentication
    }
  }
  return new AuthenticationByAccountStub()
}

export function makeAuthenticationUpdateStatusRepositoryStub(): AuthenticationUpdateStatusRepository {
  class AuthenticationUpdateStatusRepositoryStub
  implements AuthenticationUpdateStatusRepository {
    async updateStatus(
      authenticationId: uuid,
      status: AuthenticationStatusEnum
    ): Promise<Authentication> {
      return mockedAuthentication
    }
  }
  return new AuthenticationUpdateStatusRepositoryStub()
}
