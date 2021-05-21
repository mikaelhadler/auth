import { AuthGroup, AuthGroupProperties, CreateAuthGroup } from "@auth/domain";
import { CreateAuthGroupRepository } from "./protocols/create-auth-group-repository";

export class DbCreateAuthGroup implements CreateAuthGroup {
  constructor(private readonly createAuthGroup: CreateAuthGroupRepository) {}

  async create(authGroup: AuthGroupProperties): Promise<AuthGroup> {
    const response = await this.createAuthGroup.create(authGroup);
    return response;
  }
}
