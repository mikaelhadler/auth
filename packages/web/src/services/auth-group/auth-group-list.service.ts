import { ListAuthGroupRepository } from "@auth/use-case";
import { AuthGroup } from "@auth/entity";
import { client } from "@/config/http";

export class AuthGroupService implements ListAuthGroupRepository {
  async list(): Promise<AuthGroup[]> {
    const list = await client.get<AuthGroup[]>("/api/auth-groups");
    return list.data;
  }
}
