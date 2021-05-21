import { Activity, AddAuthGroupActivity, AuthGroup, uuid } from "@auth/domain";
import { GetAuthGroupRepository } from "./protocols/get-auth-group-repository";
import { UpdateAuthGroupRepository } from "./protocols/update-auth-group-repository";

export class DbAddAuthGroupActivity implements AddAuthGroupActivity {
  constructor(
    private readonly getAuthGroupRepo: GetAuthGroupRepository,
    private readonly updateAuthGroupRepo: UpdateAuthGroupRepository
  ) {}

  async addActivity(authGroupId: uuid, activity: Activity): Promise<AuthGroup> {
    const authGroup = await this.getAuthGroupRepo.get(authGroupId);
    if (!authGroup) {
      throw new Error(`auth group not found for id: ${authGroupId}`);
    }

    authGroup.activities.push(activity);

    const authGroupUpdated = await this.updateAuthGroupRepo.update(
      authGroupId,
      authGroup
    );
    return authGroupUpdated;
  }
}
