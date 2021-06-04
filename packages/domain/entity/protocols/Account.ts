import { Authentication } from "./authentication"
import { uuid } from "./utils"

export enum AccountStatusEnum {
  WAITING_FOR_APPROVAL,
  APPROVED,
  REPROVED,
  BLOCKED
}

export interface Address {
  id: uuid
  street: string // confidential data
  suite: string // confidential data
  city: string // confidential data
  zipCode: string // confidential data
}

export interface Accounts {
  id: uuid
  name: string // confidential data
  username: string // confidential data
  email: string // confidential data
  phone: string // confidential data
  address?: Address // confidential data,
  authentication?: Authentication
  createdAt: Date
  active: boolean // only approved status
  status: AccountStatusEnum
}

// get | update | create | cancel
export type AccountsProperties = Omit<Accounts, "id">
export type AccountsUpdates = Partial<Accounts>

export interface ListAccountByAuthGroup {
  listAccountByAuthGroupId(authGroupId: uuid): Promise<Accounts[]>
}

export interface ListAllAccount {
  listAll(): Promise<Accounts[]>
}

export interface GetAccountById {
  getById(accountId: uuid): Promise<Accounts>
}

export interface CancelAccountById {
  cancel(accountId: uuid): Promise<Accounts>
}

export interface UpdateAccountById {
  update(accountId: uuid, data: AccountsUpdates): Promise<Accounts>
}
