import { Accounts } from "@auth/entity"

export interface ListAllAccountRepository {
  listAll(): Promise<Accounts[]>
}
