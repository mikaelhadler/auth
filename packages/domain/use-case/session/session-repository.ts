import { Session, uuid } from "@auth/entity";

export type SessionFilters = Partial<Session>;
export interface SessionListRepository {
  getSessionList(options?: SessionFilters): Promise<Session[]>;
}

export interface SessionListByAuthenticationRepository {
  getSessionsByAuthenticationId(authenticationId: uuid): Promise<Session[]>;
}
