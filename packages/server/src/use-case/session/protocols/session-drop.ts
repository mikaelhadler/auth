import { uuid } from "@auth/domain";

export interface SessionDropRepository {
  drop(sessionId: uuid): Promise<void>;
}
