import { AccountModel, uuid } from "@auth/domain";
import { AccountsByGroupRepository } from "@/use-case/account/protocols/account-by-auth-group-repository";
import { mockAccount } from "@/__tests__/entity/mock/account";
import { GetAccountByIdRepository } from "@/use-case/account/protocols/account-by-id-repository";
import { ListAllAccountRepository } from "@/use-case/account/protocols/list-all-account";
import { CancelAccountByIdRepository } from "@/use-case/account/protocols/cancel-account-by-id-repository";

export const mockedAccountList = [
  mockAccount(),
  mockAccount(),
  mockAccount(),
  mockAccount(),
  mockAccount(),
];
export const mockedAccount = mockAccount();
export function makeAccountByGroupRepositoryStub(): AccountsByGroupRepository {
  class AccountByGroupRepositoryStub implements AccountsByGroupRepository {
    async getAccountByGroup(authGroupId: uuid): Promise<AccountModel[]> {
      return [];
    }
  }
  return new AccountByGroupRepositoryStub();
}

export function makeGetAccountByIdRepositoryStub(): GetAccountByIdRepository {
  class GetAccountByIdStub implements GetAccountByIdRepository {
    async getAccountById(accountId: uuid): Promise<AccountModel> {
      return mockedAccount;
    }
  }
  return new GetAccountByIdStub();
}

export function makeCancelAccountByIdRepositoryStub(): CancelAccountByIdRepository {
  class CancelAccountByIdStub implements CancelAccountByIdRepository {
    async cancel(accountId: uuid): Promise<AccountModel> {
      return mockedAccount;
    }
  }
  return new CancelAccountByIdStub();
}

export function makeAccountsByGroupRepositoryStub(): AccountsByGroupRepository {
  class AccountsByGroupRepositoryStub implements AccountsByGroupRepository {
    async getAccountByGroup(authGroupId: uuid): Promise<AccountModel[]> {
      return mockedAccountList;
    }
  }
  return new AccountsByGroupRepositoryStub();
}

export function makeListAllAccountRepositoryStub(): ListAllAccountRepository {
  class ListAllAccountRepositoryStub implements ListAllAccountRepository {
    async listAll(): Promise<AccountModel[]> {
      return mockedAccountList;
    }
  }
  return new ListAllAccountRepositoryStub();
}
