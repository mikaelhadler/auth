import { AccountModel, uuid } from "@auth/domain";
export interface GetAccountByIdRepository {
  getAccountById(accountId: uuid): Promise<AccountModel>;
}
