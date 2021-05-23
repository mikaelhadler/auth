import { Activity, AddAuthGroupActivity, AuthGroup, uuid } from '@auth/entity'
import {
  GetAuthGroupRepository,
  UpdateAuthGroupRepository
} from '@auth/use-case'

export class DbAddAuthGroupActivity implements AddAuthGroupActivity {
  constructor(
    private readonly getAuthGroupRepo: GetAuthGroupRepository,
    private readonly updateAuthGroupRepo: UpdateAuthGroupRepository
  ) {}

  async addActivity(authGroupId: uuid, activity: Activity): Promise<AuthGroup> {
    const authGroup = await this.getAuthGroupRepo.get(authGroupId)
    if (!authGroup) {
      throw new Error(`auth group not found for id: ${authGroupId}`)
    }

    authGroup.activities.push(activity)

    const authGroupUpdated = await this.updateAuthGroupRepo.update(
      authGroupId,
      authGroup
    )
    return authGroupUpdated
  }
}
