import { DbListAccountByAuthGroup } from "@/use-case/account/db-list-account-by-auth-group";
import { AccountsByGroupRepository } from "@auth/use-case";
import {
  makeAccountsByGroupRepositoryStub,
  mockedAccountList,
} from "../stubs/account";

describe("DbListAccountByAuthGroup", () => {
  it("should call AccountsByGroupRepository with correct values", async () => {
    const { sut, listAccountsByGroup } = makeSut();
    const functionName = "getAccountByGroup";
    const authGroupId = "a1-a1-a1-a1";
    const spy = jest.spyOn(listAccountsByGroup, functionName);
    await sut.listAccountByAuthGroupId(authGroupId);
    expect(spy).toHaveBeenCalledWith(authGroupId);
  });
  it("should throw if AccountsByGroupRepository throws", async () => {
    const { sut, listAccountsByGroup } = makeSut();
    const functionName = "getAccountByGroup";
    const authGroupId = "a1-a1-a1-a1";
    const expectedThrow = new Error("any_accountByGroupError");
    jest
      .spyOn(listAccountsByGroup, functionName)
      .mockReturnValueOnce(Promise.reject(expectedThrow));
    const promise = sut.listAccountByAuthGroupId(authGroupId);
    expect(promise).rejects.toThrowError(expectedThrow);
  });
  it("should return accounts on success", async () => {
    const { sut } = makeSut();
    const authGroupId = "a1-a1-a1-a1";
    const response = await sut.listAccountByAuthGroupId(authGroupId);
    expect(response).toEqual(mockedAccountList);
  });
});

type SutTypes = {
  sut: DbListAccountByAuthGroup;
  listAccountsByGroup: AccountsByGroupRepository;
};

function makeSut(): SutTypes {
  const listAccountsByGroup = makeAccountsByGroupRepositoryStub();
  const sut = new DbListAccountByAuthGroup(listAccountsByGroup);

  return {
    sut,
    listAccountsByGroup,
  };
}
