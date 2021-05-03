import { AuthGroup, ListAuthGroup } from '@auth/entity'
import { ListAuthGroupRepository } from './protocols/list-auth-group-repository'

export class DbListAuthGroup implements ListAuthGroup {
  constructor (private readonly listAuthGroup: ListAuthGroupRepository) {}

  async list (): Promise<AuthGroup[]> {
    const response = await this.listAuthGroup.list()
    return response
  }
}
