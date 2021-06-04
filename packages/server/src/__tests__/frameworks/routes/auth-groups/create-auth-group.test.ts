import request from "supertest"
import { app } from "@/frameworks/config"
import { prismaMock } from "@/__tests__/frameworks/database/prisma-client-mock"
import { as_auth_groups } from "@prisma/client"

describe("POST /api/auth-groups", () => {
  it.skip("should return HttpResponse serverError on repository throws", async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    prismaMock.as_auth_groups.create.mockRejectedValueOnce(
      new Error("any_repository_error")
    )

    const { body, statusCode } = await request(app)
      .post("/api/auth-groups")
      .send({
        title: "admin",
        activities: [
          {
            id: "d0d8a425-7665-417d-9f70-0712c4bdae42",
            name: "auth-group",
            permissions: ["readonly", "create", "delete", "update"]
          }
        ]
      })

    expect(statusCode).toBe(500)
    expect(body).toMatchSnapshot()
  })
  it.skip("should return HttpResponse Ok on success", async () => {
    prismaMock.as_auth_groups.create.mockReturnValueOnce(
      /** @ts-ignore */
      mockAuthGroupPrismaRepository
    )

    const { body, statusCode } = await request(app)
      .post("/api/auth-groups")
      .send({
        title: "admin",
        activities: [
          {
            id: "d0d8a425-7665-417d-9f70-0712c4bdae42",
            name: "auth-group",
            permissions: ["readonly", "create", "delete", "update"]
          }
        ]
      })

    expect(statusCode).toBe(200)
    expect(body).toMatchSnapshot()
  })
})

const mockAuthGroupPrismaRepository: as_auth_groups = {
  id: "37f2e75e-4b86-4a99-977e-2aea6d4c782b",
  title: "Administrator"
}
