import { uuid } from "@/../../shared/entity";
import { DbRemoveAuthGroupActivity } from "@/use-case/auth-group/db-remove-auth-group-activity";
import {
  GetAuthGroupRepository,
  UpdateAuthGroupRepository,
} from "@auth/use-case";

import {
  mockedAuthGroup,
  makeGetAuthGroupStub,
  makeUpdateAuthGroupStub,
} from "../stubs/auth-group";

describe("DbRemoveAuthGroupActivity", () => {
  it("should call GetAuthGroupRepository", async () => {
    const { sut, getAuthGroupStub } = makeSut();
    const functionName = "get";
    const authGroupId = "a1-a1-a1-a1";
    const spy = jest.spyOn(getAuthGroupStub, functionName);
    await sut.removeActivity(authGroupId, mockedAuthGroupActivity);
    expect(spy).toHaveBeenCalledWith(authGroupId);
  });
  it("should throw if GetAuthGroupRepository throw", async () => {
    const { sut, getAuthGroupStub } = makeSut();
    const functionName = "get";
    const expectedThrow = new Error("any_list_auth_group_error");
    const authGroupId = "a1-a1-a1-a1";
    jest
      .spyOn(getAuthGroupStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow));
    const promise = sut.removeActivity(authGroupId, mockedAuthGroupActivity);
    await expect(promise).rejects.toThrowError(expectedThrow);
  });
  it("should throw if GetAuthGroupRepository not found auth group", async () => {
    const { sut, getAuthGroupStub } = makeSut();
    const functionName = "get";
    const authGroupId = "a1-a1-a1-a1";
    const expectedThrow = new Error(
      `auth group not found for id: ${authGroupId}`
    );
    jest
      .spyOn(getAuthGroupStub, functionName)
      .mockReturnValueOnce(Promise.resolve(null));
    const promise = sut.removeActivity(authGroupId, mockedAuthGroupActivity);
    await expect(promise).rejects.toThrowError(expectedThrow);
  });
  it("should throw if Activity not found in authGroup", async () => {
    const { sut, getAuthGroupStub } = makeSut();
    const functionName = "get";
    const authGroupId = "a1-a1-a1-a1";
    const expectedThrow = new Error("activity not found to remove");
    const anyActivity = {
      id: <uuid>authGroupId,
      name: "anyName",
      permissions: [],
    };
    jest
      .spyOn(getAuthGroupStub, functionName)
      .mockReturnValueOnce(Promise.resolve(authGroupToUpdate));
    const promise = sut.removeActivity(authGroupId, anyActivity);
    await expect(promise).rejects.toThrowError(expectedThrow);
  });
  it("should call updateAuthGroupRepository with correct values", async () => {
    const { sut, updateAuthGroupStub } = makeSut();
    const functionName = "update";
    const authGroupId = "a1-a1-a1-a1";
    const spy = jest.spyOn(updateAuthGroupStub, functionName);
    await sut.removeActivity(authGroupId, mockedAuthGroupActivity);
    expect(spy).toHaveBeenCalledWith(authGroupId, authGroupUpdated);
  });
  it("should throw if updateAuthGroupRepository throws", async () => {
    const { sut, updateAuthGroupStub } = makeSut();
    const functionName = "update";
    const expectedThrow = new Error("any_update_auth_group_error");
    const authGroupId = "a1-a1-a1-a1";
    jest
      .spyOn(updateAuthGroupStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow));
    const promise = sut.removeActivity(authGroupId, mockedAuthGroupActivity);
    await expect(promise).rejects.toThrowError(expectedThrow);
  });
  it("should return a authGroup on success", async () => {
    const { sut } = makeSut();
    const authGroupId = "a1-a1-a1-a1";

    const response = await sut.removeActivity(
      authGroupId,
      mockedAuthGroupActivity
    );

    expect(response).toEqual(authGroupUpdated);
  });
});

type SutTypes = {
  sut: DbRemoveAuthGroupActivity;
  getAuthGroupStub: GetAuthGroupRepository;
  updateAuthGroupStub: UpdateAuthGroupRepository;
};

function makeSut(): SutTypes {
  const getAuthGroupStub = makeGetAuthGroupStub();
  const updateAuthGroupStub = makeUpdateAuthGroupStub();
  const sut = new DbRemoveAuthGroupActivity(
    getAuthGroupStub,
    updateAuthGroupStub
  );

  return {
    sut,
    getAuthGroupStub,
    updateAuthGroupStub,
  };
}

const { mockedAuthGroupActivity, authGroupToUpdate, authGroupUpdated } =
  mockUpdatedAuthGroup();

function mockUpdatedAuthGroup() {
  const authGroupToUpdate = Object.assign({}, mockedAuthGroup);

  const [mockedAuthGroupActivity, ...activities] = authGroupToUpdate.activities;
  const authGroupUpdated = Object.assign({}, authGroupToUpdate, { activities });
  return {
    authGroupToUpdate,
    mockedAuthGroupActivity,
    authGroupUpdated,
  };
}
