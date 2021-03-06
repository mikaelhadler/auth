import { Session, SessionById, uuid } from "@auth/entity";
import { SessionByIdRepository } from "@auth/use-case";

export class DbSessionById implements SessionById {
  constructor(private readonly sessionById: SessionByIdRepository) {}

  async getById(sessionId: uuid): Promise<Session> {
    const session = await this.sessionById.getById(sessionId);
    if (!session) {
      throw new Error("Session not found");
    }
    return session;
  }
}
