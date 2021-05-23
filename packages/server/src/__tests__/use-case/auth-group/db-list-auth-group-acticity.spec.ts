import { DbListAuthGroupActivity } from "@/use-case/auth-group/db-list-auth-group-activity";
import { GetAuthGroupRepository } from "@auth/use-case";
import { mockedAuthGroup, makeGetAuthGroupStub } from "../stubs/auth-group";

describe("DbListAuthGroupActivity", () => {
  it("should call GetAuthGroupRepository", async () => {
    const { sut, getAuthGroupStub } = makeSut();
    const functionName = "get";
    const authGroupId = "a1-a1-a1-a1";
    const spy = jest.spyOn(getAuthGroupStub, functionName);
    await sut.list(authGroupId);
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
    const promise = sut.list(authGroupId);
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
    const promise = sut.list(authGroupId);
    await expect(promise).rejects.toThrowError(expectedThrow);
  });
  it("should return a list of authGroup", async () => {
    const { sut } = makeSut();
    const authGroupId = "a1-a1-a1-a1";
    const expectedReturn = mockedAuthGroup.activities;
    const response = await sut.list(authGroupId);
    expect(response).toEqual(expectedReturn);
  });
});

type SutTypes = {
  sut: DbListAuthGroupActivity;
  getAuthGroupStub: GetAuthGroupRepository;
};

function makeSut(): SutTypes {
  const getAuthGroupStub = makeGetAuthGroupStub();
  const sut = new DbListAuthGroupActivity(getAuthGroupStub);

  return {
    sut,
    getAuthGroupStub,
  };
}
