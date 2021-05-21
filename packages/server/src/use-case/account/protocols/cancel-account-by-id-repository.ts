import { AccountModel } from "@auth/domain";

export interface CancelAccountByIdRepository {
  cancel(accountId): Promise<AccountModel>;
}
