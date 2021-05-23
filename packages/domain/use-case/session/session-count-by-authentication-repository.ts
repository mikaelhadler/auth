import { uuid } from "@auth/entity";

export interface SessionCountByAuthenticationRepository {
  count(authenticationId: uuid): Promise<number>;
}
