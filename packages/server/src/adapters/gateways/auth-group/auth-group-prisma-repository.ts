import { AuthGroupModel } from '@auth/entity'
import { ListAuthGroupRepository } from '@/use-case/auth-group/protocols/list-auth-group-repository'

import { activities, auth_groups, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type FullAuthGroup = auth_groups & {
  activities: activities[];
}

// TODO - make tests (jest-mock-extended | prisma-test-utils)
export class AuthGroupPrismaRepository implements ListAuthGroupRepository {
  async list (): Promise<AuthGroupModel[]> {
    const response = await prisma.auth_groups.findMany({
      include: { activities: true }
    })

    return response.map((item:FullAuthGroup): AuthGroupModel => {
      return new AuthGroupModel(item)
    })
  }
}
