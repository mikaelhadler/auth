import { uuid } from "@auth/entity";

export interface SessionDropRepository {
  drop(sessionId: uuid): Promise<void>;
}
