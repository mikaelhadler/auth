import { AccountModel, uuid } from "@auth/entity";
export interface GetAccountByIdRepository {
  getAccountById(accountId: uuid): Promise<AccountModel>;
}
