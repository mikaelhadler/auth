// import prisma from "@/frameworks/database/prisma-client-helper"
import prisma from "@/frameworks/database/prisma-client-helper"
import { uuid, Accounts, AccountModel, AccountStatusEnum } from "@auth/entity"
import { AccountsByGroupRepository } from "@auth/use-case"

export class AccountPrismaRepository implements AccountsByGroupRepository {
  async getAccountByGroup(authGroupId: uuid): Promise<Accounts[]> {
    const list = await prisma.as_auth_groups_authentications.findMany({
      where: {
        auth_groups_id: authGroupId
      },
      include: {
        as_authentications: {
          include: {
            as_accounts: true
          }
        }
      }
    })

    return list.map(({ as_authentications }) => {
      const { as_accounts } = as_authentications
      const account = {
        id: as_accounts.id,
        name: as_accounts.name,
        username: as_accounts.username,
        email: as_accounts.email,
        phone: as_accounts.phone,
        active: as_accounts.active,
        status: AccountStatusEnum[as_accounts.status],
        createdAt: new Date(as_accounts.created_at)
      }

      return new AccountModel(account)
    })
  }
}
