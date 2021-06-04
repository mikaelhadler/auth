import request from "supertest"
import { app } from "@/frameworks/config"
import { prismaMock } from "@/__tests__/frameworks/database/prisma-client-mock"
import { as_auth_groups } from "@prisma/client"
import { mocked_authentication__group } from "@/__tests__/entity/mock/account"

describe("DELETE /api/auth-groups/:id", () => {
  it("should return HttpResponse serverError on repository throws", async () => {
    // @ts-ignore
    prismaMock.as_auth_groups_authentications.findMany.mockReturnValue([])
    // @ts-ignore
    prismaMock.as_auth_groups.delete.mockRejectedValueOnce(
      new Error("any_repository_error")
    )

    const { body, statusCode } = await request(app).delete(
      "/api/auth-groups/any_id"
    )

    expect(statusCode).toBe(500)
    expect(body).toMatchSnapshot()
  })
  it("should return HttpResponse badRequest on authGroup used", async () => {
    // @ts-ignore
    prismaMock.as_auth_groups_authentications.findMany.mockReturnValueOnce([
      mocked_authentication__group
    ])
    // @ts-ignore
    prismaMock.as_auth_groups.delete.mockRejectedValueOnce(
      new Error("any_repository_error")
    )

    const { body, statusCode } = await request(app).delete(
      "/api/auth-groups/any_id"
    )

    expect(statusCode).toBe(500)
    expect(body).toMatchSnapshot()
  })
  it("should return HttpResponse Ok on success", async () => {
    mockAll()

    const { body, statusCode } = await request(app).delete(
      "/api/auth-groups/any_id"
    )

    expect(statusCode).toBe(200)
    expect(body).toMatchSnapshot()
  })
})

const mockAuthGroupPrismaRepository: as_auth_groups = {
  id: "37f2e75e-4b86-4a99-977e-2aea6d4c782b",
  title: "Administrator"
}

function mockAll(): void {
  /** @ts-ignore */
  prismaMock.as_auth_groups_authentications.findMany.mockReturnValue([])

  /** @ts-ignore */
  prismaMock.as_auth_groups.delete.mockReturnValue(
    /** @ts-ignore */
    mockAuthGroupPrismaRepository
  )
}
