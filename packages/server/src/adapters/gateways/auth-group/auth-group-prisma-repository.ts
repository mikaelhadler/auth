import {
  Activity,
  AuthGroup,
  AuthGroupModel,
  AuthGroupProperties,
  uuid,
} from "@auth/entity";
import {
  ListAuthGroupRepository,
  CreateAuthGroupRepository,
} from "@auth/use-case";

import {
  as_activities,
  as_auth_groups,
  as_auth_groups_activities,
  PrismaClient,
} from "@prisma/client";
import prisma from "@/frameworks/database/prisma-client-helper";

type FullAuthGroup = as_auth_groups & {
  activities: (as_auth_groups_activities & {
    activity: as_activities;
  })[];
};

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
              activity_id: activity.id,
            })),
          },
        },
      },
    });
    return created;
  }

  async list(): Promise<AuthGroupModel[]> {
    const response = await prisma.as_auth_groups.findMany({
      include: {
        activities: {
          include: { activity: true },
        },
      },
    });
    return response.map((item: FullAuthGroup): AuthGroupModel => {
      return new AuthGroupModel({
        id: item.id,
        title: item.title,
        activities: item.activities.map(
          ({ activity }): Activity => ({
            id: <uuid>activity.id,
            name: activity.name,
            permissions: activity.permissions,
          })
        ),
      });
    });
  }
}
