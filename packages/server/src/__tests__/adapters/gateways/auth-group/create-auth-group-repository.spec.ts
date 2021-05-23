/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AuthGroupPrismaRepository } from "@/adapters/gateways/auth-group/auth-group-prisma-repository";

import { prismaMock } from "@/__tests__/frameworks/database/prisma-client-mock";
import { CreateAuthGroupRepository } from "@auth/use-case";
import { AuthGroupProperties } from "@auth/entity";

describe("CreateAuthGroupRepository", () => {
  it("should call create", async () => {
    const { sut } = makeSut();
    const authGroup: AuthGroupProperties = {
      title: "Administrator",
      activities: [
        {
          id: "d0d8a425-7665-417d-9f70-0712c4bdae42",
          name: "auth-group",
          permissions: ["readonly", "create", "delete", "update"],
        },
      ],
    };

    const expectedCall = {
      title: "Administrator",
      activities: {
        createMany: {
          data: [
            {
              activity_id: "d0d8a425-7665-417d-9f70-0712c4bdae42",
            },
          ],
        },
      },
    };
    // @ts-ignore
    const spy = prismaMock.as_auth_groups.create;
    await sut.create(authGroup);

    expect(spy).toHaveBeenCalledWith({
      data: expectedCall,
    });
  });
});

type SutTypes = {
  sut: CreateAuthGroupRepository;
};

function makeSut(): SutTypes {
  const sut = new AuthGroupPrismaRepository();
  return { sut };
}
