import { Authentication, AuthenticationStatusEnum, uuid } from "@auth/domain";
import { AuthenticationByAccountRepository } from "@/use-case/session/protocols/authentication-by-account-repository";
import { AuthenticationUpdateStatusRepository } from "@/use-case/session/protocols/authentication-update-status-repository";
import { mockAuthentication } from "@/__tests__/entity/mock/authentications";

export const mockedAuthentication = mockAuthentication();
export function makeAuthenticationByAccountStub(): AuthenticationByAccountRepository {
  class AuthenticationByAccountStub
    implements AuthenticationByAccountRepository
  {
    async getByAccountId(accountId: uuid): Promise<Authentication> {
      return mockedAuthentication;
    }
  }
  return new AuthenticationByAccountStub();
}

export function makeAuthenticationUpdateStatusRepositoryStub(): AuthenticationUpdateStatusRepository {
  class AuthenticationUpdateStatusRepositoryStub
    implements AuthenticationUpdateStatusRepository
  {
    async updateStatus(
      authenticationId: uuid,
      status: AuthenticationStatusEnum
    ): Promise<Authentication> {
      return mockedAuthentication;
    }
  }
  return new AuthenticationUpdateStatusRepositoryStub();
}
