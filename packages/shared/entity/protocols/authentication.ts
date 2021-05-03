import { uuid } from './Utils'

export enum AuthenticationStatusEnum {
  Online,
  Offline,
  Blocked,
  Created,
}

export interface Authentication {
  id: uuid
  accountId: uuid
  password: string
  attempts: number
  sessionLimit: number
  status: AuthenticationStatusEnum
  active: boolean
  authGroup: string[]
  createdAt: Date
  updatedAt: Date
}

export type AuthenticationProperties = Omit<Authentication, 'id'>

export interface AuthenticationList {
  getList(): Promise<Authentication[]>
}

export interface AuthenticationByAccount {
  getByAccountId (accountId: uuid): Promise<Authentication>
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
