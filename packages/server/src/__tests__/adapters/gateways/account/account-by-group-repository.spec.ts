import { AccountPrismaRepository } from "@/adapters/gateways/account/account-prisma-repository"
import { AccountsByGroupRepository } from "@auth/use-case"
import { prismaMock } from "@/__tests__/frameworks/database/prisma-client-mock"
import { mocked_authentication__group } from "@/__tests__/entity/mock/account"

describe("AccountByGroupRepository", () => {
  it("should return account if auth_group is used", async () => {
    const { sut } = makeSut()

    /** @ts-ignore */
    prismaMock.as_auth_groups_authentications.findMany.mockReturnValue(
      /** @ts-ignore */
      [mocked_authentication__group]
    )

    const expectedResponse = [
      {
        active: true,
        createdAt: new Date("2021-06-03T00:04:13.052Z"),
        email: "adriano_silvareis@hotmail.com",
        id: "40cc1dd4-bb37-4397-9280-9ae0c8eeb0a7",
        name: "Adriano",
        phone: "27998460117",
        status: 0,
        username: "adriano_silvareis"
      }
    ]
    const response = await sut.getAccountByGroup(
      "a6158cdc-37cb-41b7-9c8a-0b677fc7601e"
    )
    expect(response).toEqual(expectedResponse)
  })
})

type SutTypes = {
  sut: AccountsByGroupRepository
}

function makeSut(): SutTypes {
  const sut = new AccountPrismaRepository()
  return { sut }
}
