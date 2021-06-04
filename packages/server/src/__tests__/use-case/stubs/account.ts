import { Accounts, uuid } from "@auth/entity"
import {
  AccountsByGroupRepository,
  GetAccountByIdRepository,
  ListAllAccountRepository,
  CancelAccountByIdRepository
} from "@auth/use-case"
import { mockAccount } from "@/__tests__/entity/mock/account"

export const mockedAccountList = [
  mockAccount(),
  mockAccount(),
  mockAccount(),
  mockAccount(),
  mockAccount()
]
export const mockedAccount = mockAccount()
export function makeAccountByGroupRepositoryStub(): AccountsByGroupRepository {
  class AccountByGroupRepositoryStub implements AccountsByGroupRepository {
    async getAccountByGroup(authGroupId: uuid): Promise<Accounts[]> {
      return []
    }
  }
  return new AccountByGroupRepositoryStub()
}

export function makeGetAccountByIdRepositoryStub(): GetAccountByIdRepository {
  class GetAccountByIdStub implements GetAccountByIdRepository {
    async getAccountById(accountId: uuid): Promise<Accounts> {
      return mockedAccount
    }
  }
  return new GetAccountByIdStub()
}

export function makeCancelAccountByIdRepositoryStub(): CancelAccountByIdRepository {
  class CancelAccountByIdStub implements CancelAccountByIdRepository {
    async cancel(accountId: uuid): Promise<Accounts> {
      return mockedAccount
    }
  }
  return new CancelAccountByIdStub()
}

export function makeAccountsByGroupRepositoryStub(): AccountsByGroupRepository {
  class AccountsByGroupRepositoryStub implements AccountsByGroupRepository {
    async getAccountByGroup(authGroupId: uuid): Promise<Accounts[]> {
      return mockedAccountList
    }
  }
  return new AccountsByGroupRepositoryStub()
}

export function makeListAllAccountRepositoryStub(): ListAllAccountRepository {
  class ListAllAccountRepositoryStub implements ListAllAccountRepository {
    async listAll(): Promise<Accounts[]> {
      return mockedAccountList
    }
  }
  return new ListAllAccountRepositoryStub()
}
