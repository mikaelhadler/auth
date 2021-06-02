import {
  AuthGroup,
  AuthGroupModel,
  AuthGroupProperties,
  uuid
} from "@auth/entity"
import {
  ListAuthGroupRepository,
  CreateAuthGroupRepository
} from "@auth/use-case"

import {
  as_activities,
  as_auth_groups,
  as_auth_groups_activities
} from "@prisma/client"
import prisma from "@/frameworks/database/prisma-client-helper"

// TODO - make tests (jest-mock-extended | prisma-test-utils)
export class AuthGroupPrismaRepository
  implements ListAuthGroupRepository, CreateAuthGroupRepository
{
  async create(authGroup: AuthGroupProperties): Promise<AuthGroup> {
    const created = await prisma.as_auth_groups.create({
      data: {
        title: authGroup.title,
        activities: {
          createMany: {
            data: authGroup.activities.map((activity) => ({
              activity_id: activity.id
            }))
          }
        }
      }
    })
    return new AuthGroupModel(created)
  }

  async list(): Promise<AuthGroupModel[]> {
    const response = await prisma.as_auth_groups.findMany()
    return response.map((item: as_auth_groups): AuthGroupModel => {
      return new AuthGroupModel({
        id: <uuid>item.id,
        title: item.title
      })
    })
  }
}
