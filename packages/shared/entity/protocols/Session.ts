import { ip, uuid } from './Utils'

export interface Session {
  id: uuid
  authenticationId: uuid
  ip: ip
  userAgent: string
  createdAt: Date
  dueDate: Date
  active: boolean
}

export type SessionProperties = Omit<Session, 'id'>

export interface SessionList {
  listActiveSessions(): Promise<Session[]>
}

export interface SessionByAccount {
  getByAccountId(accountId: uuid): Promise<Session[]>
}

export interface SessionById {
  getById(sessionId: uuid): Promise<Session>
}

export interface CreateSession {
  create(property: SessionProperties): Promise<Session>
}

export interface SessionDrop {
  drop(sessionId: uuid, accountId: uuid): Promise<void>
}

export interface SessionLimitCheckByAccount {
  check(accountId: uuid): Promise<boolean>
}

export interface SessionCheckValidation {
  check(sessionId: uuid, userAgent: string): Promise<boolean>
}
