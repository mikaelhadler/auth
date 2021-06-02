/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ListAuthGroupRepository } from "@auth/use-case"
import { AuthGroupPrismaRepository } from "@/adapters/gateways/auth-group/auth-group-prisma-repository"

import { prismaMock } from "@/__tests__/frameworks/database/prisma-client-mock"
import { as_auth_groups } from "@prisma/client"

describe("ListAuthGroupRepository", () => {
  it("should call findMany", async () => {
    const { sut } = makeSut()
    const expectedResponse = [
      {
        id: "37f2e75e-4b86-4a99-977e-2aea6d4c782b",
        title: "Administrator"
      }
    ]
    /** @ts-ignore */
    prismaMock.as_auth_groups.findMany.mockReturnValueOnce(
      /** @ts-ignore */
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

const mockAuthGroupPrismaRepository: as_auth_groups[] = [
  {
    id: "37f2e75e-4b86-4a99-977e-2aea6d4c782b",
    title: "Administrator"
  }
]
