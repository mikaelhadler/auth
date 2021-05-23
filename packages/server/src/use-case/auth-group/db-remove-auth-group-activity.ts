import {
  Activity,
  AuthGroup,
  RemoveAuthGroupActivity,
  uuid
} from '@auth/entity'
import {
  GetAuthGroupRepository,
  UpdateAuthGroupRepository
} from '@auth/use-case'

export class DbRemoveAuthGroupActivity implements RemoveAuthGroupActivity {
  constructor(
    private readonly getAuthGroupRepo: GetAuthGroupRepository,
    private readonly updateAuthGroupRepo: UpdateAuthGroupRepository
  ) {}

  async removeActivity(
    authGroupId: uuid,
    activity: Activity
  ): Promise<AuthGroup> {
    const authGroup = await this.getAuthGroupRepo.get(authGroupId)
    if (!authGroup) {
      throw new Error(`auth group not found for id: ${authGroupId}`)
    }

    const found = authGroup.activities.find(
      ({ name }) => name === activity.name
    )
    if (!found) {
      throw new Error('activity not found to remove')
    }
    authGroup.activities = authGroup.activities.filter(
      ({ name }) => name !== activity.name
    )

    await this.updateAuthGroupRepo.update(authGroupId, authGroup)
    return authGroup
  }
}
