import { Session, uuid } from "@auth/domain";

export interface SessionByIdRepository {
  getById(sessionId: uuid): Promise<Session>;
}
