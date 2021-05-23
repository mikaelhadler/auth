import { AuthGroup, ListAuthGroup } from '@auth/entity'
import { ListAuthGroupRepository } from '@auth/use-case'

export class DbListAuthGroup implements ListAuthGroup {
  constructor(private readonly listAuthGroup: ListAuthGroupRepository) {}

  async list(): Promise<AuthGroup[]> {
    const response = await this.listAuthGroup.list()
    return response
  }
}
