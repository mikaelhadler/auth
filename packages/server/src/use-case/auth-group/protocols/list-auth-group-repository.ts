import { AuthGroup } from "@auth/domain";

export interface ListAuthGroupRepository {
  list(): Promise<AuthGroup[]>;
}
