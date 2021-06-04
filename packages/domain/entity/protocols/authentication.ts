import { Accounts } from "./account"
import { AuthGroup } from "./auth-group"
import { uuid } from "./utils"

export enum AuthenticationStatusEnum {
  Online,
  Offline,
  Blocked,
  Created
}

export interface Authentication {
  id: uuid
  account: Accounts
  password: string
  attempts: number
  sessionLimit: number
  status: AuthenticationStatusEnum
  active: boolean
  authGroup: AuthGroup[]
  createdAt: Date
  updatedAt: Date
}

export type AuthenticationProperties = Omit<Authentication, "id">

export interface AuthenticationList {
  getList(): Promise<Authentication[]>
}

export interface AuthenticationByAccount {
  getByAccountId(accountId: uuid): Promise<Authentication>
}

export interface UpdateAuthentication {
  updateById(id: uuid, auth: AuthenticationProperties): Promise<Authentication>
}

export interface CreateAuthentication {
  create(auth: AuthenticationProperties): Promise<Authentication>
}

export interface CancelAuthentication {
  cancel(authenticationId: uuid): Promise<void>
}
