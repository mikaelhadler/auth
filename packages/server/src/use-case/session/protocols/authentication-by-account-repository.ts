import { Authentication, uuid } from "@auth/domain";

export interface AuthenticationByAccountRepository {
  getByAccountId(accountId: uuid): Promise<Authentication>;
}
