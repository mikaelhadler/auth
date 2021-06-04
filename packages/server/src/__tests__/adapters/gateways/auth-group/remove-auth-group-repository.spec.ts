/* eslint-disable @typescript-eslint/ban-ts-comment */
import { RemoveAuthGroupRepository } from "@auth/use-case"
import { AuthGroupPrismaRepository } from "@/adapters/gateways/auth-group/auth-group-prisma-repository"

import { prismaMock } from "@/__tests__/frameworks/database/prisma-client-mock"

describe("RemoveAuthGroupRepository", () => {
  it("should call delete with correct value", async () => {
    const { sut } = makeSut()

    /* @ts-ignore */
    const spy = jest.spyOn(prismaMock.as_auth_groups, "delete")
    await sut.remove("any_id")
    expect(spy).toHaveBeenCalledWith({ where: { id: "any_id" } })
  })

  it("should throw if delete throw", async () => {
    const { sut } = makeSut()

    const expectedError = new Error("any_error")
    /* @ts-ignore */
    jest
      .spyOn(prismaMock.as_auth_groups, "delete")
      .mockRejectedValueOnce(expectedError)
    const promise = sut.remove("any_id")
    await expect(promise).rejects.toThrowError(expectedError)
  })
})

type SutTypes = {
  sut: RemoveAuthGroupRepository
}

function makeSut(): SutTypes {
  const sut = new AuthGroupPrismaRepository()
  return { sut }
}
