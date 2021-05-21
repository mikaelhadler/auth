import { Activity, ListAuthGroupActivity, uuid } from "@auth/domain";
import { GetAuthGroupRepository } from "./protocols/get-auth-group-repository";

export class DbListAuthGroupActivity implements ListAuthGroupActivity {
  constructor(private readonly authGroupRepo: GetAuthGroupRepository) {}

  async list(authGroupId: uuid): Promise<Activity[]> {
    const authGroup = await this.authGroupRepo.get(authGroupId);
    if (!authGroup) {
      throw new Error(`auth group not found for id: ${authGroupId}`);
    }
    return authGroup.activities;
  }
}
