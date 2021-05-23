import { AuthGroup, RemoveAuthGroup, uuid } from "@auth/entity";
import {
  AccountsByGroupRepository,
  RemoveAuthGroupRepository,
} from "@auth/use-case";

export class DbRemoveAuthGroup implements RemoveAuthGroup {
  constructor(
    private readonly account: AccountsByGroupRepository,
    private readonly authGroupRepo: RemoveAuthGroupRepository
  ) {}

  async remove(authGroupId: uuid): Promise<AuthGroup> {
    const accounts = await this.account.getAccountByGroup(authGroupId);
    if (accounts.length) {
      throw new Error("auth group in use");
    }
    const response = await this.authGroupRepo.remove(authGroupId);
    return response;
  }
}
