import { uuid } from "@auth/domain";

export interface SessionCountByAuthenticationRepository {
  count(authenticationId: uuid): Promise<number>;
}
