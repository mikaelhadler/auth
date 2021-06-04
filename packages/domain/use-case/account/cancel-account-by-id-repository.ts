import { Accounts } from "@auth/entity"

export interface CancelAccountByIdRepository {
  cancel(accountId): Promise<Accounts>
}
