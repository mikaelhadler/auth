import { Session, SessionByAccount, uuid } from "@auth/entity";
import {
  AuthenticationByAccountRepository,
  SessionListByAuthenticationRepository,
} from "@auth/use-case";

export class DbSessionByAccount implements SessionByAccount {
  constructor(
    private readonly authentication: AuthenticationByAccountRepository,
    private readonly session: SessionListByAuthenticationRepository
  ) {}

  async getByAccountId(accountId: uuid): Promise<Session[]> {
    const authentication = await this.authentication.getByAccountId(accountId);
    if (!authentication) throw new Error("account not found");
    const sessions = await this.session.getSessionsByAuthenticationId(
      authentication.id
    );
    return sessions;
  }
}
