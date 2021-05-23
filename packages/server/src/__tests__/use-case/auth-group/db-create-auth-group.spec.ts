import { DbCreateAuthGroup } from "@/use-case/auth-group/db-create-auth-group";
import { CreateAuthGroupRepository } from "@auth/use-case";
import {
  makeCreateAuthGroupRepositoryStub,
  mockedAuthGroup,
  mockedAuthGroupProperties,
} from "../stubs/auth-group";

describe("DbCreateAuthGroup", () => {
  it("should call CreateAuthGroupRepository with correct values", async () => {
    const { sut, createAuthGroupStub } = makeSut();
    const functionName = "create";
    const spy = jest.spyOn(createAuthGroupStub, functionName);
    await sut.create(mockedAuthGroupProperties);
    expect(spy).toHaveBeenCalledWith(mockedAuthGroupProperties);
  });
  it("should throw if CreateAuthGroupRepository throws", async () => {
    const { sut, createAuthGroupStub } = makeSut();
    const functionName = "create";
    const expectedThrow = new Error("any_create_auth_error");
    jest
      .spyOn(createAuthGroupStub, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow));
    const promise = sut.create(mockedAuthGroupProperties);
    expect(promise).rejects.toThrowError(expectedThrow);
  });
  it("should return a AuthGroupModel on success", async () => {
    const { sut } = makeSut();
    const response = await sut.create(mockedAuthGroupProperties);
    expect(response).toEqual(mockedAuthGroup);
  });
});

type SutTypes = {
  sut: DbCreateAuthGroup;
  createAuthGroupStub: CreateAuthGroupRepository;
};

function makeSut(): SutTypes {
  const createAuthGroupStub = makeCreateAuthGroupRepositoryStub();
  const sut = new DbCreateAuthGroup(createAuthGroupStub);

  return {
    sut,
    createAuthGroupStub,
  };
}
