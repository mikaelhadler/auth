import { AccountModel } from "@auth/domain";

export interface ListAllAccountRepository {
  listAll(): Promise<AccountModel[]>;
}
