import { DbListAuthGroup } from "@/use-case/auth-group/db-list-auth-group";
import { ListAuthGroupRepository } from "@auth/use-case";
import {
  makeListAuthGroupStub,
  mockedAuthGroupList,
} from "../stubs/auth-group";

describe("DbListAuthGroup", () => {
  it("should call ListAuthGroupRepository", async () => {
    const { sut, listAuthGroupStub } = makeSut();
    const functionName = "list";
    const spy = jest.spyOn(listAuthGroupStub, functionName);
    await sut.list();
    expect(spy).toHaveBeenCalled();
  });
  it("should throw if ListAuthGroupRepository throw", async () => {
    const { sut, listAuthGroupStub } = makeSut();
    const functionName = "list";
    const expectedThrow = new Error("any_list_auth_group_error");
    jest
      .spyOn(listAuthGroupStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow));
    const promise = sut.list();
    await expect(promise).rejects.toThrowError(expectedThrow);
  });
  it("should return a list of authGroup", async () => {
    const { sut } = makeSut();
    const expectedReturn = mockedAuthGroupList;
    const response = await sut.list();
    expect(response).toEqual(expectedReturn);
  });
});

type SutTypes = {
  sut: DbListAuthGroup;
  listAuthGroupStub: ListAuthGroupRepository;
};

function makeSut(): SutTypes {
  const listAuthGroupStub = makeListAuthGroupStub();
  const sut = new DbListAuthGroup(listAuthGroupStub);

  return {
    sut,
    listAuthGroupStub,
  };
}
