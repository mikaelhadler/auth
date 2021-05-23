/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ListAuthGroupRepository } from '@auth/use-case'
import { AuthGroupPrismaRepository } from '@/adapters/gateways/auth-group/auth-group-prisma-repository'

import { prismaMock } from '@/__tests__/frameworks/database/prisma-client-mock'
import {
  as_auth_groups,
  as_auth_groups_activities,
  as_activities
} from '@prisma/client'

type FullAuthGroup = as_auth_groups & {
  activities: (as_auth_groups_activities & {
    activity: as_activities
  })[]
}

describe('ListAuthGroupRepository', () => {
  it('should call findMany', async () => {
    const { sut } = makeSut()
    const expectedResponse = [
      {
        id: '37f2e75e-4b86-4a99-977e-2aea6d4c782b',
        title: 'Administrator',
        activities: [
          {
            id: 'd0d8a425-7665-417d-9f70-0712c4bdae42',
            name: 'auth-group',
            permissions: ['readonly', 'create', 'delete', 'update']
          }
        ]
      }
    ]
    // @ts-ignore
    prismaMock.as_auth_groups.findMany.mockReturnValueOnce(
      mockAuthGroupPrismaRepository
    )
    const list = await sut.list()
    expect(list).toEqual(expectedResponse)
  })
})

type SutTypes = {
  sut: ListAuthGroupRepository
}

function makeSut(): SutTypes {
  const sut = new AuthGroupPrismaRepository()
  return { sut }
}

const mockAuthGroupPrismaRepository = [
  {
    id: '37f2e75e-4b86-4a99-977e-2aea6d4c782b',
    title: 'Administrator',
    activities: [
      {
        activity_id: 'd0d8a425-7665-417d-9f70-0712c4bdae42',
        auth_groups_id: '37f2e75e-4b86-4a99-977e-2aea6d4c782b',
        createdAt: '2021-05-07T17:17:30.941Z',
        activity: {
          id: 'd0d8a425-7665-417d-9f70-0712c4bdae42',
          name: 'auth-group',
          permissions: ['readonly', 'create', 'delete', 'update']
        }
      }
    ]
  }
]
