import { AuthGroup, AuthGroupProperties, CreateAuthGroup } from "@auth/entity"
import { CreateAuthGroupRepository } from "@auth/use-case"

export class DbCreateAuthGroup implements CreateAuthGroup {
  constructor(private readonly createAuthGroup: CreateAuthGroupRepository) {}

  async create(authGroup: AuthGroupProperties): Promise<AuthGroup> {
    const response = await this.createAuthGroup.create(authGroup)
    return response
  }
}
