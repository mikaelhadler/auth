import { AuthGroupModel } from '@auth/entity'
import { ListAuthGroupRepository } from '@/use-case/auth-group/protocols/list-auth-group-repository'

import { as_activities, as_auth_groups, as_auth_groups_activities, PrismaClient } from '@prisma/client'

type FullAuthGroup = as_auth_groups & {
  activities: (as_auth_groups_activities & {
      activity: as_activities;
  })[];
}

// TODO - make tests (jest-mock-extended | prisma-test-utils)
export class AuthGroupPrismaRepository implements ListAuthGroupRepository {
  constructor (private readonly prisma: PrismaClient) {}

  async list (): Promise<AuthGroupModel[]> {
    const response = await this.prisma.as_auth_groups.findMany({
      include: {
        activities: {
          include: { activity: true }
        }
      }
    })

    return response.map((item:FullAuthGroup): AuthGroupModel => {
      return new AuthGroupModel({
        id: item.id,
        title: item.title,
        activities: item.activities.map(({ activity }) => activity)
      })
    })
  }
}
