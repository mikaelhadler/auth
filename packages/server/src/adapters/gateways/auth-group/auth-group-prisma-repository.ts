import {
  AuthGroup,
  AuthGroupModel,
  AuthGroupProperties,
  uuid
} from "@auth/entity"
import {
  CreateAuthGroupRepository,
  ListAuthGroupRepository,
  RemoveAuthGroupRepository
} from "@auth/use-case"

import { as_auth_groups } from "@prisma/client"
import prisma from "@/frameworks/database/prisma-client-helper"

export class AuthGroupPrismaRepository
  implements
    ListAuthGroupRepository,
    CreateAuthGroupRepository,
    RemoveAuthGroupRepository
{
  async remove(authGroupId: uuid): Promise<AuthGroup> {
    const authGroup = await prisma.as_auth_groups.delete({
      where: {
        id: authGroupId
      }
    })
    return authGroup
  }

  async create(authGroup: AuthGroupProperties): Promise<AuthGroup> {
    // const created = await prisma.as_auth_groups.create({
    //   data: {
    //     title: authGroup.title,
    //     activities: {
    //       createMany: {
    //         data: authGroup.activities.map((activity) => ({
    //           activity_id: <string>activity.id
    //         }))
    //       }
    //     }
    //   }
    // })
    // return new AuthGroupModel(created)
    return null
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
