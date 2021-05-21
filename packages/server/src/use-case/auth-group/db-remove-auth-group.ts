import { AuthGroup, RemoveAuthGroup, uuid } from "@auth/domain";
import { AccountsByGroupRepository } from "../account/protocols/account-by-auth-group-repository";
import { RemoveAuthGroupRepository } from "./protocols/remove-auth-group-repository";

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
