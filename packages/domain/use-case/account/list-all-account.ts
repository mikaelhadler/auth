import { AccountModel } from "@auth/entity";

export interface ListAllAccountRepository {
  listAll(): Promise<AccountModel[]>;
}
